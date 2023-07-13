// JavaScript – Book
// The following exercise contains the following subjects:
// ● Objects
// Instructions
// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
// ‘The book <book name> was written by <author name> in
// the year <publishing year>’

const book = {
  name: "Harry Potter and the Philosopher's Stone",
  autor: "J.K. Rowling",
  publishingYear: "1997",
  rating: 7.5,
  description: function () {
    return `The book ${this.name} was written by ${this.autor} in the ${this.publishingYear} and had a rating of ${this.rating}`;
  },
};

console.log(book.description());
