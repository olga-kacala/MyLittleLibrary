import { Book } from "./Book";

/**
 * Represents a fiction book, which is a subclass of the Book class.
 */
export class FictionBook extends Book {
  genre: string; // The genre of the fiction book.

  /**
   * Constructs a new instance of the FictionBook class.
   * @param title The title of the fiction book.
   * @param author The author of the fiction book.
   * @param ISBN The International Standard Book Number (ISBN) of the fiction book.
   * @param price The price of the fiction book.
   * @param availability The number of copies available in the inventory for the fiction book.
   * @param genre The genre of the fiction book.
   */
  constructor(
    title: string,
    author: string,
    ISBN: number,
    price: number,
    availability: number,
    genre: string
  ) {
    super(title, author, ISBN, price, availability);
    this.genre = genre;
  }

  /**
   * Retrieves the genre of the fiction book.
   * @returns The genre of the fiction book.
   */
  getGenre(): string {
    return this.genre;
  }

  /**
   * Sets the genre of the fiction book.
   * @param genre The new genre of the fiction book.
   */
  setGenre(genre: string): void {
    this.genre = genre;
  }
}
