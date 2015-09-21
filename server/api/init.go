package api

import (
	"github.com/go-martini/martini"
	"github.com/codegangsta/martini-contrib/encoder"
	"net/http"
)

var m *martini.Martini
var isDevelopment bool
const API_ENDPOINT = "/api"

func init() {
	m = martini.New()
	m.Use(martini.Recovery())
	m.Use(martini.Logger())
	m.Use(martini.Static("public", martini.StaticOptions{ Exclude: API_ENDPOINT, Expires: staticExpiresHeader }))
	m.Use(martini.Static(".", martini.StaticOptions{ Exclude: API_ENDPOINT, Expires: staticExpiresHeader }))
	// map json encoder
	m.Use(func(c martini.Context, w http.ResponseWriter) {
		c.MapTo(encoder.JsonEncoder{}, (*encoder.Encoder)(nil))
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
	})
	r := martini.NewRouter()
	r.Group(API_ENDPOINT, func(r martini.Router) {
		initBooksApi(r)
		initCurrencyApi(r)
	})
	m.Action(r.Handle)
}

func staticExpiresHeader() string {
	if (isDevelopment) {
		return "0"
	} else {
		return "65536"
	}
}

func StartMartini(isDev bool) {
	isDevelopment = isDev
	m.Run()
}
