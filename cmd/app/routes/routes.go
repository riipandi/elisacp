package routes

import (
	"github.com/gofiber/fiber/v2"
	ctr "github.com/riipandi/lisacp/cmd/app/controllers"
)

func SetupRoutes(app *fiber.App) {
	route := app.Group("/api")
	route.Get("/", ctr.Index)

	route.Get("/user", ctr.GetUsers)
	route.Get("/user/:id", ctr.GetUser)
	route.Post("/user", ctr.NewUser)
	route.Delete("/user/:id", ctr.DeleteUser)

	route.Post("/upload-single", ctr.UploadSingleFile)
	route.Post("/upload-multi", ctr.UploadMultiFile)
}
