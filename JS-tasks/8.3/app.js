/*1. create 2 book objects with properties: name, author, year.
2. create an empty object bookUtils (utils = short for utilities).
3. add to the bookUtils object a function getFirstPublished,
that receives 2 books and returns the book with the
smaller year.
4. add to the bookUtils object a function setNewEdition, that
receives a book and an edition year and sets a new
property latestEdition with the edition year, or updates an
existing one.


5. add to the bookUtils object a setLanguage function, that
receives a book and a language and sets a new property
language with the languahe, or updates an existing one.

6. add to the bookUtils object a setTranslation function, that
receives a book a language and a translator, and sets a
new property of translation, which is an object that
contains the translator and the language.



7. add to the bookUtils object a setPublisher function, that
receives a book a name and location, and sets a new
property named publisher, which is an object that contains
the name and location.



8. add to the bookUtils object a function isSamePublisher,
which receives 2 books and checks if the publisher name
and location are identical in the 2 books.*/

const bookOne = {
  name: "Harry Potter and the Philosopher's Stone",
  autor: "J.K. Rowling",
  publishingYear: "1999",
};

const bookTwo = {
  name: "Harry Potter and the Chamber of Secrets",
  autor: "J.K. Rowling",
  publishingYear: "1998",
};

const bookUtils = {};

bookUtils.getFirstPublished = function (book1, book2) {
  return book1.publishingYear > book2.publishingYear ? book1 : book2;
};

bookUtils.setNewEdition = function (book, editionYear) {
  book.latestEdition = editionYear;
};

bookUtils.setLanguage = function (book, language) {
  book.language = language;
};

bookUtils.setTranslation = function (book, language, translator) {
  book.translation = {
    language,
    translator,
  };
};

bookUtils.setPublisher = function (book, name, location) {
  book.publisher = { name, location };
};

bookUtils.isSamePublisher = function (book1, book2) {
  return (
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
  );
};

console.log(bookUtils);

console.log(bookUtils.getFirstPublished(bookOne, bookTwo));

bookUtils.setNewEdition(bookOne, 2005);

bookUtils.setLanguage(bookOne, "Russian");

bookUtils.setTranslation(bookOne, "Russian", "Vladimir Putin");

bookUtils.setPublisher(bookOne, "Bloomsbury", "United Kingdom");
bookUtils.setPublisher(bookTwo, "Bloomsbury", "United Kingdom");

let cheackPublisher = bookUtils.isSamePublisher(bookOne, bookTwo);

console.log(cheackPublisher);

console.log(bookOne);
