package commands

import (
	"fmt"
	"github.com/spf13/cobra"
)

var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Show application version",
	Long: `This command will display application information.`,

	Run: func(cmd *cobra.Command, args []string) { fmt.Println("0.1.0") },
}

func init() {
	rootCmd.AddCommand(versionCmd)
	versionCmd.Flags().BoolP("full", "f", false, "Display full version information")
}
