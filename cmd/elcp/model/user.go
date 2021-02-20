package model

import "gorm.io/gorm"

type User struct {
	gorm.Model `json:"-"`
	Name  string `json:"name"`
	Username string `gorm:"unique_index;not null" json:"username"`
	Email    string `gorm:"unique_index;not null" json:"email"`
	Password string `gorm:"not null" json:"password"`
	IsActive int `json:"is_active"`
}
