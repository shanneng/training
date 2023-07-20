import React from "react";
import ReactDOM from "react-dom";

import './styles/index.css';

const App = () => {
  return (
    <div className = "container">
      <div>
        <h1> Login </h1>
        <br/>
        <label for = "Username"> Username </label>
        <br/>
        <input type = "text" name = "Type your username" />
        <br/>
        <label for = "Password"> Password </label>
        <br/>
        <input type = "text" name = "Type your password" />
        <br/>
        <input type = "radio" name = "Remember Me" /> Remember Me
        <br/>
        <button type = "button"> LOGIN </button>
      </div>
      
      <div className = "container2">
        <ul>
          <h4>Steps</h4>
          <li>Enter your username</li>
          <li>
            Enter your password
            <ul>
              <li> Click Remember me to save your password</li>
            </ul>
            </li>
            <li>Click Login button</li>
        </ul>
      </div>
    </div>
  )
  
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);