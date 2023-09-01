import React, { useState } from "react";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";
import Header from "../../modules/components/Header/Header";
import Button from "../../modules/components/button/Button";

//import firebase
import {
  logout,
  addPost,
  getUser,
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
  const { posts } = useSelector((state) => state.posts);

  //useState
  const [post, setPost] = useState("");
  const [category, setCategory] = useState("");

  const getUserBtn = async () => {
    const userData = await getUser("melike@gmail.com");
    console.log("user data: ", userData);
  };

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
          <div>
            <h3 className="home-title">Share something!</h3>
            <form onSubmit={sendPost} className="post-form">
              <textarea
                type="text"
                placeholder="Write here"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="Add category to reach more people"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <br />
              <button type="submit">Share</button>
            </form>
          </div>
          <div>
            {posts.map((post, index) => (
              <div key={index}>
                <p>{post.post}</p>
              </div>
            ))}
          </div>
          <Button status="danger" variant="fill">
            Buton
          </Button>
          <button className="log-out-button" onClick={handleLogout}>
            Log out
          </button>
          <button className="log-out-button" onClick={getUserBtn}>
            Get User
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
