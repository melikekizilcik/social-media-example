import React from "react";

//import components
import Search from "../Search/Search";

//import redux
import { useSelector } from "react-redux";

//import style
import "./Header.css";

const Header = () => {
  //variables
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="header-container">
      <p className="website-title">TwitGram.</p>
      <Search />
      <p>{user.displayName}</p>
      <p>Settings</p>
    </div>
  );
};

export default Header;
