package utils

import (
	"log"
	"os"
	"runtime"
)

func GetCurrentExecutablePath()  string {
	path, err := os.Executable()
	if err != nil {
		log.Println(err)
	}
	return path
}

func SetWorkingDirDirectory() string {
	os := runtime.GOOS

	workingDir := ""

	switch os {
		case "darwin":
			workingDir = "/usr/local/opt/lisacp"
		case "linux":
			workingDir = "/opt/lisacp"
		default:
			workingDir = "OS not supported"
	}

	return workingDir
}

func SetUploadDirectory() string {
	return SetWorkingDirDirectory() + "/uploads"
}
