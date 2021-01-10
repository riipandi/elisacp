package config

import (
	"github.com/riipandi/lisacp/cmd/app/utils"
)

var (
	AppSecret = utils.GetEnVar("APP_SECRET")
)
