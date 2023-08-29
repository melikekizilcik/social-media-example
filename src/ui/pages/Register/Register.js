import React, { useState } from "react";

//import firebase
import { register } from "../../../common/services/FirebaseConfiguration";

//import packages
import { useNavigate } from "react-router";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";
import Header from "../../modules/components/Header/Header";

//import style
import "./Register.css";

const Register = () => {
  //variables
  const navigate = useNavigate();

  //useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //actions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    navigate("/get-information");
    console.log(user);
  };

  return (
    <>
      <Header />
      <div className="register-page">
        <Navbar />
        <div className="register-container">
          <form onSubmit={handleSubmit} className="register-form">
            <h4>Create account</h4>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <button
              type="submit"
              disabled={!email || !password}
              className="submit-button"
            >
              Sign up
            </button>
          </form>
          <span>
            Do you have an account?
            <button
              onClick={() => navigate("/login")}
              className="navigate-button"
            >
              Log in
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
