import React from "react";
import ReactDOM from "react-dom";

import './styles/index.css';

const App = () => {
  return (
    <div className = "main">
      {/* first container */}
      <div className = "container">
        <div className="form">
          <h1 className="form-header">Login</h1>

          <div className="form-field">
            <p className="form-label">Username</p>
            <input className="form-input" type="text" placeholder="Type your username"></input>
          </div>     

          <div className="form-field">
            <p className="form-label">Password</p>
            <input className="form-input" type="password" placeholder="Type your password"></input>
          </div>      

          <div className="form-field">
            <input type="checkbox"></input>
            <label className="form-label">Remember Me</label>
          </div>

          <button className="submit-button">LOGIN</button>
        </div>
        <div className="side-color"></div>
      </div>
      
      {/* second container */}
      <div className="container-2">
        <div className="steps">
          <ul>
            <li>Steps</li>
            <ul>
              <li>Enter your username</li>
              <li>Enter your password</li>
              <ul>
                <li>Click 'Remember me' to save our password</li>
              </ul>
              <li>Click Login button</li>
            </ul>
          </ul>
        </div>
        <div className="side-color"> </div>
      </div>
    </div>
  )
  
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);