// UserDetails.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const UserDetails = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container text-center">
        <h2>User Details</h2>
        <p>
          <strong>Name:</strong> {userInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {userInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {userInfo.phone}
        </p>
      </div>
    </>
  );
};

export default UserDetails;
