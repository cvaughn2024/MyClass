import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [LoginUsername, setLoginUsername] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [CreateUsername, setCreateUsername] = useState("");
  const [CreatePassword, setCreatePassword] = useState("");
  const [name, setName] = useState("");
  const [selectedButton, setSelectedButton] = useState("create_account");
  const [error, setError] = useState("");

  // function to select either create account or login buttons
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  // function to login 
  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = validateInputs();
    // if all fields are filled out
    if (isValid) {
      const existingUsers = JSON.parse(localStorage.getItem('UsersTable')) || [];
      const user = existingUsers.find(u => u.username === LoginUsername && u.password === LoginPassword);
      if (user) {
        // if succcessful, log in and set loggedinuser to currentuser
        setLoggedIn(true);
        onLogin();
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        // if username/password don't match or user isn't stored
        setError("Invalid username or password");
      }
    }
  };

  // function to create account
  const handleCreateAccount = (e) => {
    e.preventDefault();
    const isValid = validateInputs();
    if (isValid) {
      const existingUsers = JSON.parse(localStorage.getItem('UsersTable')) || [];
      const user = existingUsers.find(u => u.username === CreateUsername);
      if (user) {
        // if username is already taken
        setError("Username already exists");
      } else {
        // if username is unique
        const newUser = {
          name,
          username: CreateUsername,
          password: CreatePassword
        };
        // add new user to existing users + update logged in state
        existingUsers.push(newUser);
        localStorage.setItem('UsersTable', JSON.stringify(existingUsers));
        setLoggedIn(true);
        onLogin();
        localStorage.setItem('currentUser', JSON.stringify(newUser));
      }
    }
  };

  // make sure there are no empty inputs
  const validateInputs = () => {
    if (selectedButton == 'create_account'){
    if (name.trim() === "") {
      setError("Please enter your name");
      return false;}
    } 
    
    else if ((LoginUsername.trim() === "") && (CreateUsername.trim() === "")) {
      setError("Please enter a valid username");
      return false;
    } else if ((LoginPassword.trim() === "") && (CreatePassword.trim() === "")){
      setError("Please enter a valid password");
      return false;
    } 
    setError("");
    return true;
  };

  return (
    <div>
      <div id="title">
        <h1>MyClass</h1>
      </div>
      <div id="login_box">
        <br />
        <br />
        <button
          id="create_account"
          className={selectedButton === "create_account" ? "selected" : ""}
          onClick={() => handleButtonClick("create_account")}
        >
          Create Account
          <hr className="hrindex" />
        </button>
        <button
          id="login"
          className={selectedButton === "login" ? "selected" : ""}
          onClick={() => handleButtonClick("login")}
        >
          Login
          <hr className="hrindex" />
        </button>
        {selectedButton === "login" ? (
          <div className="prompt_box">
            <input
              type="text"
              placeholder="Username"
              value={LoginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={LoginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
        ) : (
          <div className="prompt_box">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              value={CreateUsername}
              onChange={(e) => setCreateUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={CreatePassword}
              onChange={(e) => setCreatePassword(e.target.value)}
            />
          </div>
        )}
        <div>
          {error && <div className="error">{error}</div>}
          {selectedButton == "login" ? (
            <button id="login_submit" onClick={handleLogin}>
              Login
            </button>
          ) : (
            <button id="create_submit" onClick={handleCreateAccount}>
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
          }
  export default LoginPage;

 