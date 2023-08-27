import React from "react";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";
import Header from "../../modules/components/Header/Header";

//import firebase
import { logout } from "../../../common/services/FirebaseConfiguration";

//import packages
import { useNavigate } from "react-router";

//import style
import "./Home.css";

const Home = () => {
  //variables
  const navigate = useNavigate();

  //actions
  const handleLogout = async () => {
    await logout();
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <>
      <Header />
      <div className="home-content-container">
        <Navbar />
        <div>
          <h1>Homepage</h1>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </>
  );
};

export default Home;
