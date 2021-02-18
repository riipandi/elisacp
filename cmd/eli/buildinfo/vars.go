package buildinfo

import "time"

var GitRevision string

var GitBranch string

var BuildVersion string

var BuildTime = time.Now().Format(time.RFC850)
