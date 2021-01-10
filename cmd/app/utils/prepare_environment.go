package utils

import "os"

func PrepareEnvironment()  {
	createWorkingDir()
	createUploadDir()
}

func createWorkingDir()  {
	// Determine if uploads directory does not exist
	if _, err := os.Stat(SetWorkingDirDirectory()); os.IsNotExist(err) {
		os.MkdirAll(SetWorkingDirDirectory(), os.ModePerm)
	}
}

func createUploadDir()  {
	// Determine if uploads directory does not exist
	if _, err := os.Stat(SetUploadDirectory()); os.IsNotExist(err) {
		os.MkdirAll(SetUploadDirectory(), os.ModePerm)
	}
}
