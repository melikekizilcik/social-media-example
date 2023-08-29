import React, { useState } from "react";

//import firebase
import { addUser } from "../../../common/services/FirebaseConfiguration";

//import redux
import { useSelector } from "react-redux";

//import packages
import { useNavigate } from "react-router";

//import style
import "./AfterRegister.css";
import Header from "../../modules/components/Header/Header";
import Navbar from "../../modules/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const AfterRegister = () => {
  //useState
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  //variables
  const { user } = useSelector((state) => state.auth);
  const genders = ["Male", "Female"];
  const navigate = useNavigate();

  //actions
  const submitHandle = async (e) => {
    e.preventDefault();

    await addUser({
      uid: user.uid,
      mail: user.email,
      name,
      surname,
      birthdate,
      gender,
    });

    navigate("/");
  };

  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <div className="page-container">
        <Navbar />
        <form onSubmit={submitHandle} className="form-container">
          <h3>We need your information</h3>
          <div className="information-form">
            <label>Firstname</label>
            <br />
            <input
              type="text"
              placeholder="Enter your firstname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="information-form">
            <label>Lastname</label>
            <br />
            <input
              type="text"
              placeholder="Enter your lastname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="information-form">
            <label>Birtdate</label>
            <br />
            <input
              type="date"
              placeholder="Enter your lastname"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <div className="information-form">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              {genders.map((gender, index) => (
                <option value={gender} key={index}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default AfterRegister;
