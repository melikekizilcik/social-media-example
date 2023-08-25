import React, { useState } from "react";

//import firebase
import { login } from "../../../common/services/FirebaseConfiguration";

//import packages
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginHandle } from "../../../common/store/reducers/auth";

//import components
import Navbar from "../../modules/components/Navbar/Navbar";

//import style
import "./Login.css";

const Login = () => {
  //variables
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //actions
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    dispatch(loginHandle(user));
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h3>Login to your account</h3>
        <form onSubmit={handleLogin} className="login-form">
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
            Log in
          </button>
        </form>
        <span>
          Don't you have an account?{" "}
          <button onClick={() => navigate("/register")}>Create account</button>
        </span>
      </div>
    </>
  );
};

export default Login;
