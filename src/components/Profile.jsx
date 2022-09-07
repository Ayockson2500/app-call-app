import React, { useEffect, useState } from "react";
import axios from "axios";
import UserImage from "./UserImage";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    setUserData(response.data.results);
    setLoading(!loading)
  };

  return (
    <div>
      {loading && <UserImage userData={userData} setUserData={setUserData} />}
    </div>
  );
};

export default Profile;
