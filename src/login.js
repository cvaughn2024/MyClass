import React, { useState } from 'react';

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedButton, setSelectedButton] = useState('create_account');

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };


  const handleLogin = () => {
   
      setLoggedIn(true);
  

    
  };

  /*// Function to handle logout 
  const handleLogout = () => {
    // Perform logout logic
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };*/
  
  return (
    <div>
       <div id="title">
        <h1>MyClass</h1>
      </div>
      <div id="login_box">
        <br /><br />

        <button
          id="create_account"
          className={selectedButton === 'create_account' ? 'selected' : ''}
          onClick={() => handleButtonClick('create_account')}
        >
          Create Account
          <hr className="hrindex" />
        </button>
        <button
          id="login"
          className={selectedButton === 'login' ? 'selected' : ''}
          onClick={() => handleButtonClick('login')}
        >
          Login
          <hr className="hrindex" />
        </button>

        {selectedButton === 'login' ? (
          <div className="prompt_box">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        ) : (
          <div className="prompt_box">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        )}


          <div>
        {selectedButton == 'login' ? (<button id = "login_submit" onClick={handleLogin}>Login</button> ):
        (<button id = "create_submit" onClick={handleLogin}>Create Account</button>)}
        </div>

    </div>
</div>
  );}
  
  export default LoginPage;

  



