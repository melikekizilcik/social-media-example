import React, { useState } from "react";

//import firebase
import { addUser } from "../../../common/services/FirebaseConfiguration";

//import redux
import { useSelector } from "react-redux";

const AfterRegister = () => {
  //variables
  const { user } = useSelector((state) => state.auth);

  //useState
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  //actions
  const submitHandle = async (e) => {
    e.preventDefault();
    await addUser({
      uid: user.uid,
      mail: user.email,
      name,
      surname,
      birthdate,
    });
  };

  return (
    <form onSubmit={submitHandle}>
      <h3>We need your information</h3>
      <label>Firstname</label>
      <input
        type="text"
        placeholder="Enter your firstname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Lastname</label>
      <input
        type="text"
        placeholder="Enter your lastname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <label>Birtdate</label>
      <input
        type="date"
        placeholder="Enter your lastname"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default AfterRegister;
