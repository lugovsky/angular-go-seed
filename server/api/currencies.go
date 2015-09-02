package api
import (
	"github.com/go-martini/martini"
	"github.com/parnurzeal/gorequest"
)

var request *gorequest.SuperAgent

func init() {
	request = gorequest.New()
}

func initCurrencyApi(r martini.Router) {
	r.Group("/currencies", func(r martini.Router) {
		r.Get("", func() string {
			var _, body, _ = request.Get("http://api.fixer.io/latest?base=USD").End()
			return body
		})
	})
}