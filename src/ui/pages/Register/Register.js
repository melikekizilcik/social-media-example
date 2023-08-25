import React, { useState } from "react";

//import firebase
import { register } from "../../../common/services/FirebaseConfiguration";

//import packages
import { useNavigate } from "react-router";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";

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
    navigate("/settings");
    console.log(user);
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h1>Create account</h1>
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
          <button type="submit" disabled={!email || !password}>
            Sign up
          </button>
        </form>
        <span>
          Do you have an account?
          <button onClick={() => navigate("/login")}>Log in</button>
        </span>
      </div>
    </>
  );
};

export default Register;
