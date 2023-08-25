import React, { useState } from "react";

//import firebase
import { register } from "../../../common/services/FirebaseConfiguration";

//import packages
import { useNavigate } from "react-router";

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
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h1>Create account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={!email || !password}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
