import React from "react";

//import redux
import { useSelector } from "react-redux";

//import packages
import { useNavigate } from "react-router";

//import firebase
import {
  logout,
  resetPassword,
} from "../../../common/services/FirebaseConfiguration";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";

//import style
import "./Profile.css";
import Header from "../../modules/components/Header/Header";

const Profile = () => {
  //variables
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //actions
  const handleLogout = async () => {
    await logout();
    navigate("/login", {
      replace: true,
    });
  };

  const handleVerification = async () => {
    await resetPassword();
  };

  return (
    <>
      <Header />
      <div className="profile-page-container">
        <Navbar />
        <div>
          <img className="profile-picture" src={user?.photoURL} alt="" />
          <h3>{user.name}</h3>
          <h2>{user?.displayName}</h2>
          <button onClick={handleVerification} className="submit-button">
            Verify email
          </button>
          <span>
            Update your profile:{" "}
            <button
              onClick={() => navigate("/settings")}
              className="submit-button"
            >
              Settings
            </button>
          </span>
          <button onClick={handleLogout} className="submit-button">
            Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
