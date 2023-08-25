import React from "react";

//import packages
import { NavLink } from "react-router-dom";

//import style
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink path="/">Home</NavLink>
      <NavLink path="/profile">Profile</NavLink>
    </nav>
  );
};

export default Navbar;
