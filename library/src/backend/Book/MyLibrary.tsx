import { Book } from "../../backend/Book/Book";
import { NonFictionBook } from "./NonfictionBook";
import { FictionBook } from "./FictionBook";

/**
 * Provides a collection of books available in the library.
 * @returns An array containing instances of various types of books.
 */
export const MyLibrary = () => {
  // Create instances of different types of books
  const book1 = new Book(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    9780743273565,
    10.99,
    5
  );

  const book2 = new Book(
    "To Kill a Mockingbird",
    "Harper Lee",
    9780061120084,
    12.5,
    7
  );

  const book3 = new Book("1984", "George Orwell", 9780451524935, 9.99, 3);

  const book4 = new Book(
    "The Catcher in the Rye",
    "J.D. Salinger",
    9780316769488,
    11.25,
    8
  );

  const nonFictionBook = new NonFictionBook(
    "Sapiens: A Brief History of Humankind",
    "Yuval Noah Harari",
    9780062316097,
    18.99,
    10,
    "History"
  );

  const fictionBook = new FictionBook(
    "The Small Gatsby",
    "F. Scott Fitzgerald",
    9780743273565,
    10.99,
    5,
    "Classic"
  );

  // Return an array containing all the created book instances
  return [book1, book2, book3, book4, nonFictionBook, fictionBook];
};
