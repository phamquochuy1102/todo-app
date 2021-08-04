import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>To-do App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar;
