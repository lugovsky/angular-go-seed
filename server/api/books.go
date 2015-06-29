package api
import (
	"github.com/go-martini/martini"
	"github.com/codegangsta/martini-contrib/encoder"
	"net/http"
	"../model"
)

func initBooksApi(r martini.Router) {
	r.Group("/books", func(r martini.Router) {
		r.Get("", getBooks)
	})
}

func getBooks(enc encoder.Encoder) (int, []byte) {
	return http.StatusOK, encoder.Must(enc.Encode(model.BooksGetAll()))
}
