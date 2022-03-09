package main

import (
	"github.com/IanRivas/jwt-fiber-react/database"
	"github.com/IanRivas/jwt-fiber-react/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()

	app := fiber.New()

	routes.Setup(app)

	app.Listen(":3000")
}
