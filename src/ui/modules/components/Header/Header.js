import React from "react";

//import components
import Search from "../Search/Search";

//import style
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <p className="website-title">TwitGram.</p>
      <Search />
      <p>Profile</p>
      <p>Settings</p>
    </div>
  );
};

export default Header;
