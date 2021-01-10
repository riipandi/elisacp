package main

import (
	"flag"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	ctr "github.com/riipandi/lisacp/cmd/app/controllers"
	db "github.com/riipandi/lisacp/cmd/app/database"
	"log"
)

var (
	port = flag.String("port", ":2080", "Port to listen on")
	prod = flag.Bool("prod", false, "Enable prefork in Production")
)

func main() {
	// Connected with database
	db.Connect()

	// Create fiber app
	app := fiber.New(fiber.Config{
		Prefork: *prod, // go run main.go -prod
	})

	// Middleware
	app.Use(recover.New())
	app.Use(logger.New())

	// Create app endpoint
	apiRoutes := app.Group("/api")
	apiRoutes.Get("/", ctr.Index)
	apiRoutes.Get("/users", ctr.UserList)
	apiRoutes.Post("/users", ctr.UserCreate)

	// Setup static files
	app.Static("/", "./cmd/app/static/public")

	// Handle not founds
	app.Use(ctr.ErrorNotFound)

	// Listen on port 2080
	log.Fatal(app.Listen(*port)) // go run main.go -port=:2080
}
