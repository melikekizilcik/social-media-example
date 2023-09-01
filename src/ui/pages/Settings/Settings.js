import React, { useState } from "react";

//import firebase
import {
  update,
  auth,
  resetPassword,
} from "../../../common/services/FirebaseConfiguration";

//import redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../common/store/reducers/auth";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";

//import style
import "./Settings.css";
import Header from "../../modules/components/Header/Header";

const Settings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [displayName, setDisplayName] = useState(user.display || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
    });
    dispatch(
      login({
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        emailVerified: auth.currentUser.emailVerified,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      })
    );
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(password);
    if (result) {
      setPassword("");
    }
  };
  return (
    <>
      <Header />
      <div className="settings-page">
        <Navbar />
        <div>
          <h3>Update your profile</h3>
          {user.photoURL && (
            <img className="user-photo" src={user.photoURL} alt="" />
          )}
          <form onSubmit={handleSubmit} className="update-user">
            <input
              placeholder="Update name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              value={avatar}
              placeholder="Change profile photo"
              onChange={(e) => setAvatar(e.target.value)}
            />
            <button type="Submit">Update</button>
          </form>
          <form onSubmit={handleResetSubmit} className="update-password">
            <input
              type="password"
              value={password}
              placeholder="Change password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={!password} type="submit">
              Update password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
