package seeder

import (
	"github.com/riipandi/elisacp/cmd/elisacp/model"
	"github.com/riipandi/elisacp/cmd/elisacp/utils"
)

var password, _ = utils.HashPassword("passw0rd")

var users = []model.User{
	{
		Name:     "Aris Ripandi",
		Email:    "riipandi@gmail.com",
		Username: "riipandi",
		Password: password,
		IsActive: 1,
		},
	model.User{
		Name: "John Doe",
		Email: "johndoe@gmail.com",
		Username: "johndoe",
		Password: password,
		IsActive: 0,
	},
}
