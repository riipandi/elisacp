package utils

import (
	"github.com/joho/godotenv"
	"os"
	"log"
)

// Get environment mode
func getEnv() string {
	if os.Getenv("APP_ENV") == "" {
		return "production"
	}

	return os.Getenv("APP_ENV")
}

// GetEnVar return value from dotenv file
func GetEnVar(key string) string {
	// if getEnv() == "production" {
	// 	godotenv.Load("/etc/default/elisacp")
	// } else {
	// 	godotenv.Load(".env")
	// }

	if err := godotenv.Load() ; err != nil {
		log.Fatal("Error loading .env file")
	}

    return os.Getenv(key)
}
