import React, { useState, useEffect } from 'react';


const AccountPage = ({onLogout}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  
  // functions that will handle log out functionality
    const handleLogoutClick = () => {
      setShowConfirmLogout(true);
    };

    const handleLogoutConfirm = () => {
      setCurrentUser(null);
    localStorage.setItem('currentUser', null);
      setIsLoggedIn(false);
      onLogout();

    
    };
    const handleLogoutCancel = () => {
      setShowConfirmLogout(false);
    };

 
  // function to retrieve tables of users and match it to current user
  useEffect(() => {
    const usersTable = JSON.parse(localStorage.getItem('UsersTable'));
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    if (loggedInUser) {
      const foundUser = usersTable.find(user => user.username === loggedInUser.username);
      setCurrentUser(foundUser);
    }
  }, []);

  return (

    <><div id="title">
      <h1>Account</h1>

    </div><div>
        {currentUser && (
          <div>
            <h2>Welcome, {currentUser.name}!</h2>
            <h2>Your username is {currentUser.username}.</h2>
          </div>
        )}

       
          <button id="logout" onClick={handleLogoutClick}>Log out</button>
        

        {showConfirmLogout && (
          <div id="logo">
            <p id="log">Are you sure you want to log out?</p>
            <button id="yes" path="/http://localhost:3000" onClick={handleLogoutConfirm}>Yes, log out</button>
            <button id="no" onClick={handleLogoutCancel}>No, stay</button>

          </div>

        )}

      </div></>

  
  );
};

export default AccountPage;
