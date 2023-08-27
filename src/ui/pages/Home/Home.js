import React, { useState } from "react";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";
import Header from "../../modules/components/Header/Header";

//import firebase
import {
  logout,
  addPost,
} from "../../../common/services/FirebaseConfiguration";
import { serverTimestamp } from "firebase/firestore";

//import packages
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

//import style
import "./Home.css";

const Home = () => {
  //variables
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  //useState
  const [post, setPost] = useState("");
  const [category, setCategory] = useState("");

  //actions
  const handleLogout = async () => {
    await logout();
    navigate("/login", {
      replace: true,
    });
  };

  const sendPost = async (e) => {
    e.preventDefault();
    await addPost({
      post,
      uid: user.uid, //auth.currentUser.uid ile de yazılabilir
      createdAt: serverTimestamp(),
      category,
    });
    setPost("");
    setCategory("");
  };

  return (
    <>
      <Header />
      <div className="home-content-container">
        <Navbar />
        <div>
          <h1>Homepage</h1>
          <div>
            <h3>Share something!</h3>
            <form onSubmit={sendPost}>
              <textarea
                type="text"
                placeholder="Write here"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
              <input
                type="text"
                placeholder="Add category to reach more people"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button type="submit">Share</button>
            </form>
          </div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </>
  );
};

export default Home;
