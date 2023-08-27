import React from "react";

//import packages
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFire, BsFillBookmarkFill } from "react-icons/bs";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";

//import style
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="pages">
          <AiFillHome className="icon" /> Home
        </div>
      </NavLink>
      <br />
      <NavLink to="/profile">
        <div className="pages">
          <BsFire className="icon" /> Profile
        </div>
      </NavLink>
      <br />
      <NavLink to="/register">
        <div className="pages">
          <IoMdNotifications className="icon" />
          Register
        </div>
      </NavLink>
      <br />
      <NavLink to="/login">
        <div className="pages">
          <BsFillBookmarkFill className="icon" /> Login
        </div>
      </NavLink>
      <br />
      <NavLink to="/settings">
        <div className="pages">
          <IoMdSettings className="icon" />
          Settings
        </div>
      </NavLink>
      <br />
      <button className="share-button">Share</button>
    </nav>
  );
};

export default Navbar;
