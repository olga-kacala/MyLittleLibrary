import React, { useState } from "react";
import classes from "../Home/Home.module.css";
import { Book } from "../../backend/Book/Book";

// Defining prop types for ShoppingCart component
type ShoppingCartProps = {
  // Array of search results
  searchResults?: Book[];
  // Current search query
  searchQuery: string;
  // Function to set the search query
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  // Function to trigger search
  onSearch: () => void;
  // Function to add a book to the shopping cart
  onAddToCart: (book: Book) => void;
}

// ShoppingCart functional component
export const ShoppingCart: React.FC<ShoppingCartProps> = ({searchQuery, setSearchQuery, searchResults, onSearch, onAddToCart}) => {
  return (
    <div>
      {/* Heading */}
      <h2 className={classes.heading}>Find your book</h2> 
      {/* Search input and button */}
      <div className={classes.inputWrapper}> 
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={classes.input} 
        />
        <button onClick={onSearch} className={classes.button}>Search</button> 
      </div>
      
      {/* Display search results if available */}
      {searchResults && searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          {/* Mapping through search results */}
          {searchResults.map((item, index) => (
            <div key={index}>
              <p>
                "{item.title}" by {item.author} - ${item.price},{" "}
                {item.availability} pcs
              </p>
              {/* Button to add book to cart */}
              <button
                onClick={() => onAddToCart(item)}
                className={classes.button}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
