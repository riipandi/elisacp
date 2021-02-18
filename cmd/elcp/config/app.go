package config

import "github.com/riipandi/elisacp/cmd/elcp/utils"

var (
	AppSecret   = utils.GetEnv("APP_SECRET")
	AppDomain   = utils.GetEnv("APP_DOMAIN")
	SSLCertFile = utils.GetEnv("SSL_CERT_FILE")
	SSLKeyFile  = utils.GetEnv("SSL_KEY_FILE")
)
