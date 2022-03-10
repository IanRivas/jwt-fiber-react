package main

import (
	"github.com/IanRivas/jwt-fiber-react/database"
	"github.com/IanRivas/jwt-fiber-react/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect()

	app := fiber.New()

	// Allow Credentials - necesitamos esto para que sirvan las cookies
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Listen(":8080")
}
