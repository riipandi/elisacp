package config

import "github.com/riipandi/elisacp/cmd/elcp/helper"

var (
	AppSecret   = helper.GetEnv("APP_SECRET")
	AppDomain   = helper.GetEnv("APP_DOMAIN")
	SSLCertFile = helper.GetEnv("SSL_CERT_FILE")
	SSLKeyFile  = helper.GetEnv("SSL_KEY_FILE")
)
