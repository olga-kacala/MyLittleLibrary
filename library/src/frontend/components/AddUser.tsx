import React, { useState } from "react";
import { User } from "../../backend/User/User"; // Importing User type from backend
import classes from "../Home/Home.module.css"; // Importing CSS module

// Defining prop types for AddUser component
type AddUserProps = {
  onAddUser: (userData: User | null) => void; // Function to add a new user
  userData: {
    name: string;
    email: string;
    ID: number;
  } | null; // User data or null if not available
};

// AddUser functional component
export const AddUser: React.FC<AddUserProps> = ({ onAddUser, userData }) => {
  // State to manage new user data
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    ID: "",
  });

  // Function to create a new user
  const createUser = () => {
    const { name, email, ID } = newUserData;
    // Checking if all fields are filled
    if (name && email && ID) {
      // Creating a new User object
      const newUser = new User(name, email, parseInt(ID));
      // Calling the onAddUser function to add the new user
      onAddUser(newUser);
      // Resetting the input fields
      setNewUserData({ name: "", email: "", ID: "" });
    } else {
      // Alerting if any field is empty
      alert("Please fill in all fields.");
    }
  };

  // Function to handle input change for creating a new user
  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Updating the newUserData state with the changed input
    setNewUserData({ ...newUserData, [name]: value });
  };

  // Rendering the AddUser component
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newUserData.name}
        onChange={handleNewUserChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={newUserData.email}
        onChange={handleNewUserChange}
        required
      />
      <input
        type="number"
        placeholder="ID"
        name="ID"
        value={newUserData.ID}
        onChange={handleNewUserChange}
        required
      />
      <button className={classes.button} onClick={createUser}>Create User</button>
      {/* Displaying user data if available */}
      {userData && (
        <div>
          <h3>Hello {userData.name}! </h3>
          <h4>User details:</h4>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>ID: {userData.ID}</p>
        </div>
      )}
    </div>
  );
};
