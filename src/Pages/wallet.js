import React, { useState } from "react";
  
const Wallet = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);



const handleLogout = () => {
  // perform login logic here
  setIsLoggedIn(false);

};;

  return (
    <div className = "App">

  <div id = "title">
      <h1>Wallet</h1>
</div>

  
  
    <div class = "wallet_charts">


        <div id = "balance">
            Balance

        </div>
         
         <div id = "prizes">
        Prizes

      </div>

      <div id = "history">
        History
      </div>


  
      
  
     </div>
          
  
      </div>

    
  );
};
  
export default Wallet;
