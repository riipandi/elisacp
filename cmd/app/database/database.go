package database

import (
	"github.com/riipandi/lisacp/cmd/app/models"
	"github.com/riipandi/lisacp/cmd/app/utils"

	"fmt"
	"log"
	"sync"
)

var (
	db []*models.User
	mu sync.Mutex
)

// Connect with database
func Connect() {
	db = make([]*models.User, 0)

    if db == nil {
        log.Fatalf("Failed to connect to the " +
            utils.GetEnVar("DB_NAME") + " database")
    }

	fmt.Println("Connected with Database")
}

func Insert(user *models.User) {
	mu.Lock()
	db = append(db, user)
	mu.Unlock()
}

func Get() []*models.User {
	return db
}
