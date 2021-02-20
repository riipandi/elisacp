package config

import "github.com/riipandi/elisacp/cmd/elcp/helper"

var (
	DBUser = utils.GetEnv("DB_USERNAME")
	DBPass = utils.GetEnv("DB_PASSWORD")
	DBName = utils.GetEnv("DB_NAME")
	DBHost = utils.GetEnv("DB_HOST")
	DBPort = utils.GetEnv("DB_PORT")
)
