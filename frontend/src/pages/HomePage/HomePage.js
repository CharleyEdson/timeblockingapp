import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import '../../index.css'



import axios from "axios";
import PageCreation from "../../components/PageCreation/PageCreation";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();


  
  return (
    <div className="flex ">
      <h1>Home Page for {user.username}!</h1>
      <PageCreation />
    </div>
  );
};

export default HomePage;
