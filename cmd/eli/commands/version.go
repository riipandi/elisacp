package commands

import (
	"fmt"
	"github.com/spf13/cobra"
)

var (
	shortened = false
    version = "dev"
    commit  = "none"
    date    = "unknown"

	versionCmd = &cobra.Command {
		Use:   "version",
		Short: "Show application version",
		Long: `This command will display application information.`,
		Run: func(cmd *cobra.Command, args []string) {
			if shortened {
				fmt.Println(version)
			} else {
				fmt.Printf("Elisa CLI %v build %v. Compiled at %s\n", version, commit, date)
			}
			return
		},
	}
)

func init() {
	versionCmd.Flags().BoolVarP(&shortened, "short", "s", false, "Print just the version number.")
	rootCmd.AddCommand(versionCmd)
}
