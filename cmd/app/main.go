package main

import (
	"crypto/tls"
	"flag"
	"fmt"
	"log"

	ctr "github.com/riipandi/lisacp/cmd/app/controllers"
	"github.com/riipandi/lisacp/cmd/app/database"
	"github.com/riipandi/lisacp/cmd/app/database/seeder"
	"github.com/riipandi/lisacp/cmd/app/router"
	"github.com/riipandi/lisacp/cmd/app/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/websocket/v2"
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

	// Middleware for websocket
	app.Use("/ws", func(c *fiber.Ctx) error {
		if c.Get("host") == "localhost:2030" {
			c.Locals("Host", "Localhost:2030")
			return c.Next()
		}
		return c.Status(403).JSON(fiber.Map{"status": "error", "message": "Request origin not allowed"})
	})

	// Initialize database connection
	database.ConnectDB()
	seeder.DatabaseSeeder(database.DBConn)

	// Create api endpoint
	router.SetupRoutes(app)

	// Upgraded websocket request
	app.Get("/ws", websocket.New(func(c *websocket.Conn) {
		fmt.Println(c.Locals("Host")) // "Localhost:2030"
		for {
			mt, msg, err := c.ReadMessage()
			if err != nil {
				log.Println("read:", err)
				break
			}
			log.Printf("recv: %s", msg)
			err = c.WriteMessage(mt, msg)
			if err != nil {
				log.Println("write:", err)
				break
			}
		}
	}))

	// Setup static files and SPA router for frontend
	app.Static("/", staticDir + "/public")
	app.Get("/*", func(ctx *fiber.Ctx) error {
		return ctx.SendFile(staticDir + "/public/index.html")
	})

	// Handle not founds
	app.Use(ctr.ErrorNotFound)

	// Listen for HTTPS on port 2083
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

	// Listen websocket on port 2030
	go func() {
		log.Fatal(app.Listen(":2030"))
	}()

	// Listen for HTTP on port 2080
	log.Fatal(app.Listen(*port)) // go run main.go -port=:2080
}
