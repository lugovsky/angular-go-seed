package api

import (
	"github.com/go-martini/martini"
	"github.com/codegangsta/martini-contrib/encoder"
	"net/http"
)

var m *martini.Martini
const API_ENDPOINT = "/api"

func init() {
	m = martini.New()
	m.Use(martini.Recovery())
	m.Use(martini.Logger())
	m.Use(martini.Static("../public", martini.StaticOptions{ Exclude: API_ENDPOINT }))
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

func StartMartini() {
	m.Run()
}
