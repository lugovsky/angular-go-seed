package model

type User struct {
	name 		string
	login		string
	password	string
	balance		float64
}

var users []User

func init() {
	users = make([]User, 0)
	fillUsers()
}

func fillUsers() {
	users = append(users, User{ name: "Customer", login: "user", password: "secret", balance: 50 })
}

func UserFindByLogin(login string) User {
	// For filter
	return users[0]
}
