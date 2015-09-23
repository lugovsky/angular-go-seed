package common

import(
	"github.com/jessevdk/go-flags"
)

type AppOptions struct {
	IsDev bool
}

var Settings AppOptions

func init() {
	var appOpts struct {
		Dev []bool `short:"d" long:"dev" description:"Use dev settings"`
	}
	flags.Parse(&appOpts)

	Settings = AppOptions{ IsDev: len(appOpts.Dev) > 0 && appOpts.Dev[0] }
}