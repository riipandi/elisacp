package commands

import (
	"fmt"
	"time"
	"github.com/spf13/cobra"
)

var (
	shortened    = false
	GitRevision  = "xxxxxxx"
	GitBranch    = "master"
	BuildVersion = "dev"
	BuildTime    = time.Now().Format(time.RFC850)

	versionCmd = &cobra.Command {
		Use:   "version",
		Short: "Show application version",
		Long: `This command will display application information.`,
		Run: func(cmd *cobra.Command, args []string) {
			if shortened {
				fmt.Println(BuildVersion)
			} else {
				fmt.Printf("Elisa CLI %v build %v branch %v. Compiled at %s\n",
					BuildVersion, GitRevision, GitBranch, BuildTime)
			}
			return
		},
	}
)

func init() {
	versionCmd.Flags().BoolVarP(&shortened, "short", "s", false, "Print just the version number.")
	rootCmd.AddCommand(versionCmd)
}
