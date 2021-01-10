package config

import (
	"github.com/riipandi/lisacp/cmd/app/utils"
)

var (
	AppSecret   = utils.GetEnVar("APP_SECRET")
	SslCertFile = utils.GetEnVar("SSL_CERT_FILE")
	SslKeyFile  = utils.GetEnVar("SSL_KEY_FILE")
)
