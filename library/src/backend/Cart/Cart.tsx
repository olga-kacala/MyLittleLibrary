import { User } from "../User/User";
import { Book } from "../Book/Book";

/**
 * Represents a shopping cart.
 */
export class Cart {
  /**
   * The user associated with the shopping cart.
   */
  user: User;

  /**
   * The array of books in the shopping cart.
   */
  books: Book[];

  /**
   * The discounted total price of the books in the shopping cart.
   */
  discountedPrice: number | null;

  /**
   * Creates an instance of Cart.
   * @param user - The user associated with the shopping cart.
   */
  constructor(user: User = new User("", "", 0)) {
    this.user = user;
    this.books = [];
    this.discountedPrice = null;
  }

  /**
   * Adds a book to the shopping cart.
   * @param book - The book to add to the cart.
   */
  addBook(book: Book): void {
    if (book.availability > 0) {
      this.books.push(book);
      book.availability--;
      console.log(`${book.title} was added to your cart`);
    } else {
      console.log(`${book.title} is out of stock`);
    }
  }

  /**
   * Removes a book from the shopping cart.
   * @param book - The book to remove from the cart.
   */
  removeBook(book: Book): void {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      book.availability++;
      console.log(`${book.title} removed from cart`);
    } else {
      console.log(`${book.title} is not in the cart`);
    }
  }

  /**
   * Retrieves a book from the shopping cart based on its title.
   * @param title - The title of the book to retrieve.
   */
  getBook(title: string): void {
    const book = this.books.find((book) => book.title === title);
    console.log(
      book ? `${book.title}, ${book.author}, ${book.ISBN}` : "Book not detected"
    );
  }

  /**
   * Calculates the total price of the books in the shopping cart.
   * @param log - A flag indicating whether to log the total price.
   * @returns The total price of the books in the cart.
   */
  totalPrice(log = true): number {
    let total = 0;
    if (this.discountedPrice !== null) {
      // If discounted price is available, use it
      total = this.discountedPrice;
    } else {
      // Calculate total price without discount
      this.books.forEach((element) => {
        total += element.price;
      });
    }
    if (log) {
      console.log(`Total price: ${total}`);
    }
    return total;
  }

  /**
   * Applies a discount to the total price of the books in the shopping cart.
   * @param percentage - The percentage discount to apply.
   * @returns The discounted total price of the books.
   */
  discount(percentage: number): number {
    const totalPrice = this.totalPrice(false);
    this.discountedPrice = totalPrice * ((100 - percentage) / 100);
    return this.discountedPrice;
  }
}
