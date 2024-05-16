import { useState, useEffect, useRef } from "react";
import classes from "./Home.module.css";

import { ShoppingCart } from "../components/ShoppingCart";
import { Book } from "../../backend/Book/Book";
import { Cart } from "../../backend/Cart/Cart";
import { User } from "../../backend/User/User";
import { AddUser } from "../components/AddUser";
import { MyLibrary } from "../../backend/Book/MyLibrary";

export const Home = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState<Book[]>([]);
  // Reference for cart
  const cartRef = useRef(new Cart());
  // State for current user
  const [user, setUser] = useState<User | null>(null);
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for search results
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  // State for total price of items in cart
  const [totalPrice, setTotalPrice] = useState<number>(0); 
  // Array of books from the library
  const books = MyLibrary();

  // Function to add a book to the cart
  const handleAddToCart = (book: Book) => {
    cartRef.current.addBook(book);
    setCartItems([...cartRef.current.books]);
  };

  // Function to remove a book from the cart
  const handleRemoveFromCart = (book: Book) => {
    cartRef.current.removeBook(book);
    setCartItems([...cartRef.current.books]);
  };

  // Function to handle user creation
  const handleAddUser = (userData: User | null) => {
    setUser(userData);
  };

  // Function to perform search
  const handleSearch = () => {
    const filteredBooks = books.filter(
      (book) =>
        book.getTitle().toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.getAuthor().toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  // Update total price when cart items change
  useEffect(() => {
    updateTotalPrice();
  }, [cartItems]); 

  // Function to calculate and update total price
  const updateTotalPrice = () => {
    const totalPrice = cartRef.current.totalPrice();
    setTotalPrice(totalPrice);
  };

  // Rendering the Home component
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>My Little Bookstore</h1>
      {/* Section for creating user */}
      <h2 className={classes.heading}>Create user</h2>
      <AddUser onAddUser={handleAddUser} userData={user} />
      {/* Shopping cart component */}
      <ShoppingCart
        searchResults={searchResults}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
        onAddToCart={handleAddToCart}
      />
      {/* Section for displaying cart items */}
      <h2 className={classes.heading}>Your cart</h2>
      <div>
        {cartItems.map((book, index) => (
          <div key={index}>
            <p>
              "{book.title}" by {book.author} - ${book.price},{" "}
              {book.availability} pcs
            </p>
            {/* Button to remove item from cart */}
            <button className={classes.button} onClick={() => handleRemoveFromCart(book)}>Remove</button>
          </div>
        ))}
      </div>
      {/* Section for displaying total price */}
      <div>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2> 
      </div>
    </div>
  );
};
