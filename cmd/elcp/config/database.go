package config

import "github.com/riipandi/elisacp/cmd/elcp/helper"

var (
	DBUser = helper.GetEnv("DB_USERNAME")
	DBPass = helper.GetEnv("DB_PASSWORD")
	DBName = helper.GetEnv("DB_NAME")
	DBHost = helper.GetEnv("DB_HOST")
	DBPort = helper.GetEnv("DB_PORT")
)
