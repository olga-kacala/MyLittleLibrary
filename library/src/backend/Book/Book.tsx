/**
 * Represents a book in the bookstore inventory.
 */
export class Book {
  title: string; // The title of the book.
  author: string; // The author of the book.
  ISBN: number; // The International Standard Book Number (ISBN) of the book.
  price: number; // The price of the book.
  availability: number; // The number of copies available in the inventory.

  /**
   * Constructs a new instance of the Book class.
   * @param title The title of the book.
   * @param author The author of the book.
   * @param ISBN The International Standard Book Number (ISBN) of the book.
   * @param price The price of the book.
   * @param availability The number of copies available in the inventory.
   */
  constructor(
    title: string,
    author: string,
    ISBN: number,
    price: number,
    availability: number
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.price = price;
    this.availability = availability;
  }

  /**
   * Retrieves the title of the book.
   * @returns The title of the book.
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * Sets the title of the book.
   * @param title The new title of the book.
   */
  setTitle(title: string): void {
    this.title = title;
  }

  /**
   * Retrieves the author of the book.
   * @returns The author of the book.
   */
  getAuthor(): string {
    return this.author;
  }

  /**
   * Sets the author of the book.
   * @param author The new author of the book.
   */
  setAuthor(author: string): void {
    this.author = author;
  }
}
