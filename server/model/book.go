package model

type Book struct {
	Name    string
	Author  string
	Year    int
	Price	float64
}

var books []Book

func init() {
	books = make([]Book, 0)
	fillBooks()
}

func fillBooks() {
	books = append(books,
		Book{ Name: "Shininng", Author: "King Stephen", Year: 1980, Price: 50.40 },
		Book{ Name: "Game of Thrones", Author: "George Martin", Year: 1994, Price: 33.50 },
		Book{ Name: "Ulysse", Author: "James Joyce", Year: 1865, Price: 77.11 },
		Book{ Name: "Crime and Punishment", Author: "Fedor Dostoevskiy", Year: 1854, Price: 61.23 })
}

func BooksGetAll() []Book {
	return books
}

