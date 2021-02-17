package controllers

import (
	"github.com/gofiber/fiber/v2"
)

// Index returns welcome message
func Index(c *fiber.Ctx) error {
    return c.JSON(fiber.Map{
        "message": "This is ElisaCP API",
    })
}

// NotFound returns custom 404 page
func ErrorNotFound(c *fiber.Ctx) error {
    // return c.Status(404).SendFile("./static/private/404.html")
    return c.Status(404).JSON(fiber.Map{
        "message": "Resource not found",
        "status": "error",
    })
}
