package model

type Book struct {
	Name    	string
	Author  	string
	CoverUrl	string
	Description	string
	Year    	int
	Price		float64
}

var books []Book

func init() {
	books = make([]Book, 0)
	fillBooks()
}

func fillBooks() {
	books = append(books,
		Book{ Name: "Shining", Author: "King Stephen", Year: 1980, Price: 50.40, CoverUrl: "shining.jpg", Description: "The Shining centers on the life of Jack Torrance, an aspiring writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies. His family accompanies him on this job, including his young son Danny, who possesses \"the shining,\" an array of psychic abilities that allow Danny to see the hotel's horrific past. Soon, after a winter storm leaves them snowbound, the supernatural forces inhabiting the hotel influence Jack's sanity, leaving his wife and son in incredible danger." },
		Book{ Name: "Game of Thrones", Author: "George Martin", Year: 1994, Price: 33.50, CoverUrl: "game-of-thrones.jpg", Description: "In the novel, recounting events from various points of view, Martin introduces the plot-lines of the noble houses of Westeros, the Wall, and the Targaryens. The novel has inspired several spin-off works, including several games. It is also the basis for the first season of Game of Thrones, an HBO television series that premiered in April 2011. A March 2013 paperback TV tie-in re-edition was also titled Game of Thrones, excluding the indefinite article \"A\"." },
		Book{ Name: "Ulysses", Author: "James Joyce", Year: 1865, Price: 77.11, CoverUrl: "ulysses.jpg", Description: "Ulysses chronicles the peripatetic appointments and encounters of Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904.[5] Ulysses is the Latinised name of Odysseus, the hero of Homer's epic poem Odyssey, and the novel establishes a series of parallels between its characters and events and those of the poem (e.g., the correspondence of Leopold Bloom to Odysseus, Molly Bloom to Penelope, and Stephen Dedalus to Telemachus)." },
		Book{ Name: "Crime and Punishment", Author: "Fedor Dostoevskiy", Year: 1854, Price: 61.23, CoverUrl: "crime-and-punishment.jpg", Description: "Crime and Punishment focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in St. Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash. Raskolnikov, in attempts to defend his actions, argues that with the pawnbroker's money he can perform good deeds to counterbalance the crime, while ridding the world of a worthless vermin. He also commits the murder to test a theory of his that dictates some people are naturally capable of such actions, and even have the right to perform them. Several times throughout the novel, Raskolnikov compares himself with Napoleon Bonaparte and shares his belief that murder is permissible in pursuit of a higher purpose." })
}

func BooksGetAll() []Book {
	return books
}

