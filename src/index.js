import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/navbar";
import Courses from ".//Pages/courses";
import AccountPage from ".//Pages/account";
import Dashboard from ".//Pages/dashboard";
import Posts from ".//Pages/posts";
import LoginPage from "./login";
import Create from ".//Pages/create";
import './App.css';

// function to handle logged in state
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    // perform login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // perform login logic here
    setIsLoggedIn(false);
  };

  // if logged in, render app, if not, render login page
  return (
    <>
      {isLoggedIn ? (
        <div id="nav">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Dashboard />} />
                <Route path="courses" element={<Courses />} />
                <Route path="posts" element={<Posts />} />
                <Route path="create" element={<Create />} />
                <Route path="account" element={<AccountPage onLogout={handleLogout} />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

