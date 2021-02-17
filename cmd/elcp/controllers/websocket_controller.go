package controllers

import (
	"fmt"
	"log"

	"github.com/gofiber/websocket/v2"
)

func WsIndex(c *websocket.Conn) {
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
}
