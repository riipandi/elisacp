package config

import (
	"github.com/riipandi/lisacp/cmd/app/utils"
)

var (
	DBUser = utils.GetEnVar("DB_USERNAME")
	DBPass = utils.GetEnVar("DB_PASSWORD")
	DBName = utils.GetEnVar("DB_NAME")
	DBHost = utils.GetEnVar("DB_HOST")
	DBPort = utils.GetEnVar("DB_PORT")
)
