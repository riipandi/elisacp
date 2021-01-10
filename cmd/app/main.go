package main

import (
	"crypto/tls"
	ctr "github.com/riipandi/lisacp/cmd/app/controllers"
	db "github.com/riipandi/lisacp/cmd/app/database"
	"log"

	"flag"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

var (
	port = flag.String("port", ":2080", "Port to listen on")
	sslPort = flag.String("sslPort", ":2083", "Port to listen on")
	prod = flag.Bool("prod", false, "Enable prefork in Production")
	enableHTTPS = true
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

	// Create api endpoint with group
	apiRoute := app.Group("/api")
	apiRoute.Get("/", ctr.Index)
	apiRoute.Get("/users", ctr.UserList)
	apiRoute.Post("/users", ctr.UserCreate)

	// Setup static files
	app.Static("/", "./cmd/app/static/public")

	// Handle not founds
	app.Use(ctr.ErrorNotFound)

	if enableHTTPS == true {
		go func() {
			// Create tls certificate
			cer, err := tls.LoadX509KeyPair(
				"./configs/certs/default-ssl.cert",
				"./configs/certs/default-ssl.key")

			if err != nil { log.Fatal(err) }
			config := &tls.Config{Certificates: []tls.Certificate{cer}}

			// Create custom listener
			ln, err := tls.Listen("tcp", *sslPort, config)
			if err != nil {
				panic(err)
			}

			// Start server with https/ssl enabled
			log.Fatal(app.Listener(ln)) // go run main.go -sslPort=:2083
		}()
	}

	// Listen on port 2080
	log.Fatal(app.Listen(*port)) // go run main.go -port=:2080
}
