package helper

import (
	"os"
    "log"
	"flag"
	"path/filepath"
)

var (
	configfile string
	flagConfig = flag.String("config", ".env", "Configuration file")
)

func PrepareEnvironment()  {
	checkConfigFile()
	createWorkingDir()
	createUploadDir()
}

func CurrentDir() string {
    dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
    if err != nil {
		log.Fatal(err)
    }
	return dir
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

func FileExists(filename string) bool {
    info, err := os.Stat(filename)
    if os.IsNotExist(err) {
        return false
    }
    return !info.IsDir()
}

func checkConfigFile() {
	if isFlagPassed(*flagConfig) {
		configfile = filepath.Join(CurrentDir(), "elisacp.conf")
	} else {
		configfile = ".env"
	}

	if _, err := os.Stat(configfile); err == nil {
		log.Print("Confguration file loaded.")
	} else if os.IsNotExist(err) {
		log.Fatalf("Configuration file %s doesn't exist!", configfile)
	} else {
		return
		// Schrodinger: file may or may not exist. See err for details.
		// Therefore, do *NOT* use !os.IsNotExist(err) to test for file existence
	}
}

func isFlagPassed(name string) bool {
    found := false
    flag.Visit(func(f *flag.Flag) {
        if f.Name == name {
            found = true
        }
    })
    return found
}
