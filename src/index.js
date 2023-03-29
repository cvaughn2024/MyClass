import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from ".//Pages/login";
import Navbar from ".//Pages/navbar";
import Work from ".//Pages/work";
import Courses from ".//Pages/courses";
import AccountPage from ".//Pages/account";
import Dashboard from ".//Pages/dashboard";
import Create from ".//Pages/create";
import Social_Hub from ".//Pages/social_hub";
import Progress from  ".//Pages/progress";
import Wallet from ".//Pages/wallet";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  
  const handleLogin = () => {
    // perform login logic here
    setIsLoggedIn(true);

  };

  const handleLogout = () => {
    // perform login logic here
    setIsLoggedIn(false);

  };;

  return (
    <>
   
      {isLoggedIn ? (
         <div id = "nav">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Dashboard />} />
              <Route path="courses" element={<Courses />}/>
              <Route path="work" element={<Work />} />
              <Route path="create" element={<Create />} />
              <Route path="progress" element={<Progress />} />
              <Route path="social_hub" element={<Social_Hub />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="account" element={<AccountPage onLogout={handleLogout}/>} />
            </Route>
          </Routes>
        </BrowserRouter>
         </div>
      ) : (
        
        <LoginPage onLogin={handleLogin}/>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

   
