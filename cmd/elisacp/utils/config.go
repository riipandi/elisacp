package utils

import (
	"github.com/joho/godotenv"
	"os"
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
	if getEnv() == "production" {
		godotenv.Load("/etc/default/elisacp")
	} else {
		godotenv.Load(".env")
	}

	//err := godotenv.Load(".env")
    //if err != nil {
    //    log.Fatalf("Error loading .env file")
    //}

    return os.Getenv(key)
}
