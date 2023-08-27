import React from "react";

//import packages
import { Routes, Route } from "react-router-dom";

//import pages
import Login from "../../ui/pages/Login/Login";
import Register from "../../ui/pages/Register/Register";
import Home from "../../ui/pages/Home/Home";
import Profile from "../../ui/pages/Profile/Profile";
import Settings from "../../ui/pages/Settings/Settings";
import AfterRegister from "../../ui/pages/AfterRegister/AfterRegister";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/get-information" element={<AfterRegister />} />
    </Routes>
  );
};

export default Navigation;
