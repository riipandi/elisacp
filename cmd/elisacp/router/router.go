package router

import (
	"github.com/gofiber/fiber/v2"
	ctr "github.com/riipandi/elisacp/cmd/elisacp/controllers"
	"github.com/riipandi/elisacp/cmd/elisacp/middleware"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")
	api.Get("/", ctr.Index)

	// Auth
	auth := api.Group("/auth")
	auth.Post("/login", ctr.Login)

	// User routes
	user := api.Group("/user")
	user.Get("/", ctr.GetUsers)
	user.Get("/:id", ctr.GetUser)
	user.Post("/", middleware.Protected(), ctr.CreateUser)
	user.Patch("/:id", middleware.Protected(), ctr.UpdateUser)
	user.Delete("/:id", middleware.Protected(), ctr.DeleteUser)

	// Upload routes
	api.Post("/upload-single", ctr.UploadSingleFile)
	api.Post("/upload-multi", ctr.UploadMultiFile)
}
