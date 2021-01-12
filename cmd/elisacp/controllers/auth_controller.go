package controllers

import (
	"github.com/riipandi/elisacp/cmd/elisacp/config"
	"github.com/riipandi/elisacp/cmd/elisacp/database"
	"github.com/riipandi/elisacp/cmd/elisacp/model"
	"github.com/riipandi/elisacp/cmd/elisacp/utils"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
)

func getUserByEmail(e string) (*model.User, error) {
	db := database.DBConn
	var user model.User
	if err := db.Where(&model.User{Email: e}).Find(&user).Error; err != nil {
		//if gorm.IsRecordNotFoundError(err) {
		//	return nil, nil
		//}
		return nil, err
	}
	return &user, nil
}

func getUserByUsername(u string) (*model.User, error) {
	db := database.DBConn
	var user model.User
	if err := db.Where(&model.User{Username: u}).Find(&user).Error; err != nil {
		//if gorm.IsRecordNotFoundError(err) {
		//	return nil, nil
		//}
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
		Password string `json:"password"`
	}

	var input LoginInput
	var ud UserData

	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).
			JSON(fiber.Map{"status": "error", "message": "Error on login request", "data": err})
	}
	identity := input.Identity
	pass := input.Password

	email, err := getUserByEmail(identity)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).
			JSON(fiber.Map{"status": "error", "message": "Error on email", "data": err})
	}

	user, err := getUserByUsername(identity)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).
			JSON(fiber.Map{"status": "error", "message": "Error on username", "data": err})
	}

	if email == nil && user == nil {
		return c.Status(fiber.StatusUnauthorized).
			JSON(fiber.Map{"status": "error", "message": "User not found", "data": err})
	}

	if email == nil {
		ud = UserData {
			ID:       user.ID,
			Username: user.Username,
			Email:    user.Email,
			Password: user.Password,
		}
	} else {
		ud = UserData {
			ID:       email.ID,
			Username: email.Username,
			Email:    email.Email,
			Password: email.Password,
		}
	}

	if !utils.CheckPasswordHash(pass, ud.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid password", "data": nil})
	}

	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = ud.Username
	claims["user_id"] = ud.ID
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	t, err := token.SignedString([]byte(config.AppSecret))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(fiber.Map{"status": "success", "message": "Success login", "accessToken": t})
}
