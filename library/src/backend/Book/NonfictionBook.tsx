import { Book } from "./Book";

/**
 * Represents a non-fiction book, which is a subtype of Book.
 */
export class NonFictionBook extends Book {
  /**
   * The genre of the non-fiction book.
   */
  genre: string;

  /**
   * Creates an instance of NonFictionBook.
   * @param title - The title of the book.
   * @param author - The author of the book.
   * @param ISBN - The ISBN number of the book.
   * @param price - The price of the book.
   * @param availability - The availability of the book in stock.
   * @param genre - The genre of the non-fiction book.
   */
  constructor(
    title: string,
    author: string,
    ISBN: number,
    price: number,
    availability: number,
    genre: string
  ) {
    // Call the constructor of the parent class (Book)
    super(title, author, ISBN, price, availability);
    // Initialize the genre property of the non-fiction book
    this.genre = genre;
  }

  /**
   * Retrieves the genre of the non-fiction book.
   * @returns The genre of the book.
   */
  getGenre(): string {
    return this.genre;
  }

  /**
   * Sets the genre of the non-fiction book.
   * @param genre - The genre to set.
   */
  setGenre(genre: string): void {
    this.genre = genre;
  }
}
