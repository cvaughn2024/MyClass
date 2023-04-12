import React, { useState, useEffect } from "react";
import Navbar from './navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./courses";
import AccountPage from "./account";
import Posts from "./posts";
import Create from  "./create";
import LoginPage from "../login"
import { Link } from "react-router-dom";

  
const Dashboard = () => {



  return (
    <div className = "App">

    <div id ="content">



  <div id = "title">
    <h1 id = "dash">Dashboard</h1>
    </div>

   
        <Link to="/courses">
          <div className="dashboard">Courses</div>
        </Link>

        <Link to="/posts">
          <div className="dashboard">Posts</div>
        </Link>

        <Link to="/create">
          <div className="dashboard">Create</div>
        </Link>


        <Link to="/account">
          <div className="dashboard">Account</div>
        </Link>

      
      </div>
          
  
      </div>

    
  );
};
  
export default Dashboard;
