import { Cart } from "../Cart/Cart";
import { User } from "../User/User";

/**
 * Represents an order placed by a user.
 */
export class Order {
  /**
   * The user who placed the order.
   */
  user: User;

  /**
   * The cart containing the books ordered by the user.
   */
  cart: Cart;

  /**
   * Creates an instance of Order.
   * @param user - The user who placed the order.
   * @param cart - The cart containing the books ordered by the user.
   */
  constructor(user: User, cart: Cart) {
    this.user = user;
    this.cart = cart;
  }

  /**
   * Displays order details including user information, total price, and ordered books.
   */
  userOrder(): void {
    const userTotalPrice = this.cart.totalPrice(false);
    const bookAmount = this.cart.books.length;
    const bookList = this.cart.books.map((book) => book.title).join(", ");
    
    console.log(`${this.user.name} email: ${this.user.email}, ID: ${this.user.ID}`);
    console.log(`${this.user.name}'s total price in cart: ${userTotalPrice}`);
    console.log(
      `${this.user.name} ordered ${bookAmount} ${
        bookAmount === 1 ? "book" : "books"
      }: ${bookAmount > 0 ? bookList : "none"}`
    );
  }
}
