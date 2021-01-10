package main

import (
	"crypto/tls"
	"github.com/gofiber/fiber/v2/middleware/cors"
	ctr "github.com/riipandi/lisacp/cmd/app/controllers"
	"github.com/riipandi/lisacp/cmd/app/database"
	"github.com/riipandi/lisacp/cmd/app/routes"
	"github.com/riipandi/lisacp/cmd/app/utils"
	"log"

	"flag"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

const staticDir = "./cmd/app/static"

var (
	port = flag.String("port", ":2080", "Port to listen on")
	prod = flag.Bool("prod", false, "Enable prefork in Production")
	sslEnable = flag.Bool("ssl", true, "Enable HTTPS protocol")
	sslPort = flag.String("sslPort", ":2083", "Port to listen on")
)

func main() {
	// Create fiber app
	app := fiber.New(fiber.Config{
		Prefork: *prod, // go run main.go -prod
	})

	// Prepare all the things
	utils.PrepareEnvironment()

	// Middleware
	app.Use(recover.New())
	app.Use(logger.New())
	app.Use(cors.New())

	// Initialize database connection
	database.InitializeConnection()
	defer database.CloseConnection()

	// Create api endpoint with group
	routes.SetupRoutes(app)

	// Setup static files and SPA routes for frontend
	app.Static("/", staticDir + "/public")
	app.Get("/*", func(ctx *fiber.Ctx) error {
		return ctx.SendFile(staticDir + "/public/index.html")
	})

	// Handle not founds
	app.Use(ctr.ErrorNotFound)

	if *sslEnable {
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
				log.Fatal(err)
			}

			// Start server with https/ssl enabled
			log.Fatal(app.Listener(ln)) // go run main.go -sslPort=:2083
		}()
	}

	// Listen on port 2080
	log.Fatal(app.Listen(*port)) // go run main.go -port=:2080
}
