import React from "react";
import ReactDOM from "react-dom";

import './styles/index.css';

const App = () => {
  return (
    <div className = "main">
      <div className = "container">
        <div className="form">
          <h1 className="form-header"> Login </h1>
          <p className="form-label">Username</p>
          <input className="form-input" type = "text" placeholder="Type your username" />
          <p className="form-label">Password</p>
          <input className="form-input" type = "text" placeholder="Type your password" />
          <input type = "radio" name = "Remember me"/> Remember me
          <div className = "login">
            <button type = "button">LOGIN</button>
          </div>
        </div>
        <div className="side-color">
        </div>
        
      </div>
      
      
      
      <div className="container2">
          <ul>
           <li> <h3> Steps </h3> </li> 
          </ul>
          <ul>
            <li>Enter your username</li>
            <li>Enter your password</li>
          <ul>
            <li>Click Remember me to save your password</li>
          </ul>
            <li>Click Login button</li>
        </ul>

        <div className="side-color2">

        </div>
      </div>
    
    </div>

  )
  
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);