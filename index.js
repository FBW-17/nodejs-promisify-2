let books = [
  { id: 1, title: "Winnie the pooh", reserved: true },
  { id: 2, title: "It", reserved: false },
  { id: 3, title: "ET", reserved: false },
  { id: 4, title: "The Joker", reserved: false },
]

// I find you a book!
// But I am oldstyle. Promisify me down below before calling me, please...
const findBook = (title, callback) => {

  setTimeout(() => {
    console.log(`I begin to search the book ${title} in the library...`)

    let bookFound = books.find(book => book.title == title)

    // if book was found => do not generate any error
    // if book was not found => generate an error message. And pass it to the callback
    let error = bookFound ? "" : `ERROR: Book '${title}' not found in our library`
    callback(error, bookFound)

  }, 3000)
}

// CALLBACK function - will reserve a book
const reserveBook = (err, book) => {
  if (err) {
    console.log(`The following error occured:\n ${err}. Reservation canceled`)
  }
  else {
    console.log(`I reserved the book with the title: ${book.title}`)
  }
  console.log()
}

// CALLBACK function - will read a book
const readBook = (err, book) => {
  if (err) {
    console.log(`The following error occured:\n ${err}. Reading canceled`)
  }
  else {
    console.log(`I just found this book ${book.title}. Will read it now. Can take ages...`)
  }
  console.log()
}

console.log()

// instead of this => call find book and handle the reservation in a then() handler
findBook("ET", reserveBook)

// instead of this => call find book and handle the reading in a then() handler
findBook("Winnie the pooh", readBook)

// now let's try the error case - reserving a book that does not exist...
findBook("The DaVinci Code", reserveBook)

// do this other thing here ...
