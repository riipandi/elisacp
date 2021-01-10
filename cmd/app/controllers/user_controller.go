package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/riipandi/lisacp/cmd/app/database"
	. "github.com/riipandi/lisacp/cmd/app/models"
)

func GetUsers(c *fiber.Ctx) error {
	db := database.DBConn
	var users []User
	db.Find(&users)
	return c.JSON(users)
}

func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn
	var user User
	db.Find(&user, id)
	return c.JSON(user)
}

func NewUser(c *fiber.Ctx) error {
	db := database.DBConn
	user := new(User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(503).JSON(err)
	}
	db.Create(&user)
	return c.JSON(user)
}

func DeleteUser(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn

	var user User
	db.First(&user, id)

	if user.Name == "" {
		return c.Status(500).JSON(fiber.Map{
			"message": "No User found with ID " + id,
			"code": 500,
		})
	}

	db.Delete(&user)

	return c.Status(200).JSON(fiber.Map{
		"message": "User successfully deleted",
		"code": 200,
	})
}
