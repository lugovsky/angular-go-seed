package main

import (
    "github.com/go-martini/martini"
    "github.com/codegangsta/martini-contrib/encoder"
    "github.com/parnurzeal/gorequest"
    "net/http"
)

var m *martini.Martini
var books []Book
var request *gorequest.SuperAgent

func init() {
    request = gorequest.New()
    books = make([]Book, 0)
    books = append(books, Book{ Name: "Shininng", Author: "King Stephen", Year: 1980 })
    m = martini.New()
    m.Use(martini.Recovery())
    m.Use(martini.Logger())
    m.Use(martini.Static("public", martini.StaticOptions{ Exclude: "/api" }))
    // map json encoder
    m.Use(func(c martini.Context, w http.ResponseWriter) {
        c.MapTo(encoder.JsonEncoder{}, (*encoder.Encoder)(nil))
        w.Header().Set("Content-Type", "application/json; charset=utf-8")
    })
    r := martini.NewRouter()
    initApi(r)
    m.Action(r.Handle)
}

func initApi(r martini.Router) {
    r.Group("/api", func(r martini.Router) {
        r.Get("", func() string {
            return "Hello"
        })
        booksApi(r)
        currencyApi(r)
    });
}

type Book struct {
    Name    string
    Author  string
    Year    int
}

func booksApi(r martini.Router) {
    r.Group("/books", func(r martini.Router) {
        r.Get("", func(enc encoder.Encoder) (int, []byte) {
            return http.StatusOK, encoder.Must(enc.Encode(books))
        })
    })
}

func currencyApi(r martini.Router) {
    r.Group("/currency", func(r martini.Router) {
        r.Get("/rates", func() string {
            var _, body, _ = request.Get("http://api.fixer.io/latest").End()
            return body
        })
    })
}

func main() {
    m.Run()
}

