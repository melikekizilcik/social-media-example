import React from "react";

//import components
import Search from "../Search/Search";

//import redux
import { useSelector } from "react-redux";

//import packages
import { useNavigate } from "react-router";

//import style
import "./Header.css";

const Header = () => {
  //variables
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <p className="website-title">TwitGram.</p>
      <Search />
      <div className="profile" onClick={() => navigate("/profile")}>
        <img className="profile-picture" src={user.photoURL} alt="" />
        <p>{user.displayName}</p>
      </div>
      <p onClick={() => navigate("/settings")}>Settings</p>
    </div>
  );
};

export default Header;
