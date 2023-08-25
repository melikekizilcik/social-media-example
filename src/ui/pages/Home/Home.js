import React from "react";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";

//import firebase
import { logout } from "../../../common/services/FirebaseConfiguration";

//import packages
import { useNavigate } from "react-router";

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
      <Navbar />
      <h1>Homepage</h1>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
};

export default Home;
