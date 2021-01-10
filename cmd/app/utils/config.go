package utils

import (
	"github.com/joho/godotenv"
    "log"
    "os"
)

// GetEnVar return value from dotenv file
func GetEnVar(key string) string {
    // load .env file
    err := godotenv.Load(".env")

    if err != nil {
        log.Fatalf("Error loading .env file")
    }

    return os.Getenv(key)
}
