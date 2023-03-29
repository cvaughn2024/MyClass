import React, { useState } from "react";
import Navbar from './navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./work";
import Courses from "./courses";
import AccountPage from "./account";
import Create from "./create";
import Social_Hub from "./social_hub";
import Progress from  "./progress";


  
const Dashboard = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);



const handleLogout = () => {
  // perform login logic here
  setIsLoggedIn(false);

};;

  return (
    <div className = "App">


<div id ="content">

  <div id = "title">
    <h1 id = "dash">Dashboard</h1>
    </div>

  
  
    <div class = "dashboard">
         Work
      </div>
  
      <div class = "dashboard">
         Progress
      </div>
  
  
      <div class = "dashboard">
          Create
      </div>
  
      <div class = "dashboard">
          Social Hub
      </div>

      <div class = "dashboard">
          Wallet
      </div>
  
      <div class = "dashboard">
          Search
          <input type="text" placeholder = "Search"/>
      </div>

      </div>
          
  
      </div>

    
  );
};
  
export default Dashboard;
