import React, { useState } from 'react';
import LoginPage from '../login';
import { Link } from 'react-router-dom';


const AccountPage = ({onLogout}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedButton, setSelectedButton] = useState('');
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogoutClick = () => {
    setShowConfirmLogout(true);
  };

  const handleLogoutConfirm = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
    onLogout();
   
  };

  const handleLogoutCancel = () => {
    setShowConfirmLogout(false);
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
       
      <div id="title">
        <h1>Account</h1>
      </div>
      <div id="account_info">
       
        <table>

        <tr>
            <td id = "first">
              Name:
            </td>
            <td id = "second">
              <p value={name} onChange={handleNameChange}>ExampleName</p>
            </td>
          </tr>

          <tr>
            <td id = "first">
              Username:
            </td>
            <td id = "second">
              <p value={username} onChange={handleUsernameChange}>ExampleUsername</p>
            </td>
          </tr>

          <tr>
            <td id = "first">
              Password:
            </td>
            <td id = "second">
            <p value={password} onChange={handlePasswordChange}>ExamplePassword</p>
            </td>
          </tr>

          <tr>
              <br></br><br></br>
            <td id = "first">
              Course(s):
            </td>
            <td id  = "second">
                Course1, Course2
            </td>
          </tr>
         
        </table>
      </div>
      <br></br><br></br>
      <div id="logout">
        <button id = "logout" onClick={handleLogoutClick}>Log out</button>
      </div>
      {showConfirmLogout && (
        <div id="logo">
          <p id = "log">Are you sure you want to log out?</p>
          <button id="yes" path = "/http://localhost:3000" onClick={handleLogoutConfirm}>Yes, log out</button>
          <button id="no" onClick={handleLogoutCancel}>No, stay</button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;


  
