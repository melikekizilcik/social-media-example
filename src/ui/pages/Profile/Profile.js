import React from "react";

//import redux
import { useSelector } from "react-redux";

const Profile = () => {
  //variables
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <img />
      <h2>{user.displayName}</h2>
    </div>
  );
};

export default Profile;
