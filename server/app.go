package main

import (
    "./api"
    "github.com/jessevdk/go-flags"
)

func main() {
    var appOpts struct {
        Dev []bool `short:"d" long:"dev" description:"Use dev settings"`
    }
    flags.Parse(&appOpts)
    api.StartMartini(len(appOpts.Dev) > 0 && appOpts.Dev[0])
}

