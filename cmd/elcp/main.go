package main

import (
	"crypto/tls"
	"flag"
	"log"

	"github.com/riipandi/elisacp/cmd/elcp/router"
	"github.com/riipandi/elisacp/cmd/elcp/utils"
	// "github.com/riipandi/elisacp/cmd/elcp/database/seeder"
	cfg "github.com/riipandi/elisacp/cmd/elcp/config"
	ctr "github.com/riipandi/elisacp/cmd/elcp/controllers"
	db "github.com/riipandi/elisacp/cmd/elcp/database"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/redirect/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

const staticDir = "./cmd/elcp/static"

var (
	flagHost = flag.String("host", ":2080", "Address to listen on HTTP")
	flagProd = flag.Bool("prod", false, "Enable prefork in Production")
)

func init() {
	// Prepare all the things
	utils.PrepareEnvironment()
	db.ConnectDB()
	// seeder.DatabaseSeeder(db.DBConn)
}

func main() {
	// Create fiber app
	app := fiber.New(fiber.Config{
		Prefork: *flagProd, // go run main.go -prod
	})

	// Middleware
	app.Use(recover.New())
	app.Use(logger.New())
	app.Use(cors.New())

	// Redirect default index page to SPA page
	app.Use(redirect.New(redirect.Config {
		Rules: map[string]string{
			"/changelog": "https://elisacp.vercel.app/changelog",
		}, StatusCode: 302,
	}))

	// Middleware for websocket with prefix /ws
	app.Use("/ws", func(c *fiber.Ctx) error {
		if c.Get("host") == "localhost:2030" {
			c.Locals("Host", "Localhost:2030")
			return c.Next()
		}
		return c.Status(403).JSON(fiber.Map{"status": "error", "message": "Request origin not allowed"})
	})

	// Create api endpoint
	router.SetupRoutes(app)
	router.SetupWebsocketRoutes(app)

	// Setup static files and SPA router for frontend
	app.Static("/", staticDir + "/public")
	app.Get("/", func(ctx *fiber.Ctx) error {
		return ctx.SendFile(staticDir + "/public/index.html")
	})

	// Handle not founds
	app.Use(ctr.ErrorNotFound)

	// Listen websocket on port 2030
	go func() {
		log.Fatal(app.Listen("localhost:2030"))
	}()

	// Listen for HTTPS on port 2443
	go func() {
		// Create tls certificate
		cer, err := tls.LoadX509KeyPair(cfg.SSLCertFile, cfg.SSLKeyFile)

		if err != nil { log.Fatal(err) }
		config := &tls.Config{Certificates: []tls.Certificate{cer}}

		// Create custom listener
		ln, err := tls.Listen("tcp", "0.0.0.0:2443", config)
		if err != nil {
			log.Fatal(err)
		}

		// Start server with https/ssl enabled
		log.Fatal(app.Listener(ln)) // go run main.go -host=:2443
	}()

	// Listen for HTTP on port 2080
	log.Fatal(app.Listen(*flagHost)) // go run main.go -host=:2080
}
