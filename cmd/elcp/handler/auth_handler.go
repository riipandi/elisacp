package handler

import (
	cfg "github.com/riipandi/elisacp/cmd/elcp/config"
	"github.com/riipandi/elisacp/cmd/elcp/database"
	"github.com/riipandi/elisacp/cmd/elcp/model"
	"github.com/riipandi/elisacp/cmd/elcp/helper"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// func getUserByEmail(e string) (*model.User, error) {
// 	db := database.DBConn
// 	var user model.User
// 	if err := db.Where(&model.User{Email: e}).First(&user).Error; err != nil {
// 		return nil, err
// 	}
// 	return &user, nil
// }

func getUserByUsername(u string) (*model.User, error) {
	db := database.DBConn
	var user model.User
	if err := db.Where(&model.User{Username: u}).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

// Login get user and password
func Login(c *fiber.Ctx) error {
	type LoginInput struct {
		Identity string `json:"identity"`
		Password string `json:"password"`
	}

	type UserData struct {
		ID       uint   `json:"id"`
		Username string `json:"username"`
		Email    string `json:"email"`
		Name     string `json:"name"`
		Password string `json:"password"`
	}

	var input LoginInput
	var ud UserData

	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).
			JSON(fiber.Map{"status": "error", "message": "Error on login request", "data": err})
	}

	user, err := getUserByUsername(input.Identity)
	if user == nil || err != nil {
		return c.Status(fiber.StatusUnauthorized).
			JSON(fiber.Map{"status": "error", "message": "User not found", "data": err})
	} else {
		ud = UserData {
			ID:       user.ID,
			Username: user.Username,
			Email:    user.Email,
			Name:     user.Name,
			Password: user.Password,
		}
	}

	if !helper.CheckPasswordHash(input.Password, ud.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid password"})
	}

	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = ud.Username
	claims["user_id"] = ud.ID
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	t, err := token.SignedString([]byte(cfg.AppSecret))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(fiber.Map {
		"status": "success",
		"accessToken": t,
		"email": ud.Email,
		"name": ud.Name,
		"username": ud.Username,
	})
}

// func getIdentity(identity string) string {
// 	if isEmail(identity) {
// 		return "email"
// 	}
// 	return "username"
// }

// func isEmail(identity string) bool {
// 	re := regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
// 	if re.MatchString(identity) {
// 		return true
// 	}
// 	return false
// }
