# My Little Bookstore App Documentation

## Introduction

My Little Bookstore is a web application designed to simulate an online bookstore. Users can browse books, add them to their cart, and make purchases. This documentation provides information on installing, using, and contributing to the app.

## Installation

To run the My Little Bookstore app locally, follow these steps:
1. Clone the repository from GitHub: `git clone git@github.com:olga-kacala/MyLittleLibrary.git`
2. Navigate to the project directory: `cd my-little-bookstore`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

Once the app is running, users can:
- Create a user account.
- Search for books by title or author.
- Add books to their cart.
- Remove books from their cart.

## File Structure

- `src/components`: Contains React components used in the app.
- `src/backend`: Contains backend logic for handling user data, books, and the shopping cart.
- `public`: Contains static assets and HTML template files.
- `src`: Contains the main application code.

## Components

The main components of the app are:
- `Home`: Renders the homepage and includes features for user authentication, book searching, and displaying the shopping cart.
- `AddUser`: Component for creating a new user account.
- `ShoppingCart`: Component for displaying search results, adding books to the cart, and managing cart items.

## Dependencies

The app uses the following dependencies:
- React: JavaScript library for building user interfaces.
- CSS Modules: CSS styling solution for React components.
- TypeScript: Superset of JavaScript that adds static typing.
- MyLibrary: Inernal library providing a collection of sample books.

## Development

To contribute to the development of the My Little Bookstore app:
1. Fork the repository on GitHub.
2. Clone your forked repository.
3. Create a new branch for your feature or bug fix: `git checkout -b feature-name`
4. Make changes, commit them, and push to your branch.
5. Submit a pull request to the main repository.
