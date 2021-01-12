package seeder

import (
	"github.com/riipandi/elisacp/cmd/elisacp/model"
	"gorm.io/gorm"
	"log"
)

func DatabaseSeeder(db *gorm.DB) {
	var err error

	for i, _ := range users {
		err = db.Debug().Model(&model.User{}).Create(&users[i]).Error
		if err != nil {
			log.Fatalf("cannot seed users table: %v", err)
		}
	}
}
