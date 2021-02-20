package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
	ctr "github.com/riipandi/elisacp/cmd/elcp/handler"
)

func SetupWebsocketRoutes(app *fiber.App) {
	ws := app.Group("/ws")
	ws.Get("/", websocket.New(ctr.WsIndex))
}
