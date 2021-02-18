package commands

import (
	"fmt"
	"github.com/spf13/cobra"
	"github.com/riipandi/elisacp/cmd/eli/buildinfo"
)

var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Show application version",
	Long: `This command will display application information.`,

	Run: func(cmd *cobra.Command, args []string) {
		fmt.Printf("Elisa CLI %v build %v branch %v. Compiled at %s\n",
			buildinfo.BuildVersion,
			buildinfo.GitRevision,
			buildinfo.GitBranch,
			buildinfo.BuildTime)
	},
}

func init() {
	rootCmd.AddCommand(versionCmd)
	versionCmd.Flags().BoolP("full", "f", false, "Display full version information")
}
