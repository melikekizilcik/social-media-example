import React from "react";

//import packages
import { NavLink } from "react-router-dom";

//import style
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
};

export default Navbar;
