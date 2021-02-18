package utils

import (
	"github.com/joho/godotenv"
	"os"
	"log"
)

// GetEnv return value from dotenv file
func GetEnv(key string) string {
	if err := godotenv.Load() ; err != nil {
		log.Fatal("Error loading .env file")
	}

    return os.Getenv(key)
}
