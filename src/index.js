import React from "react";
import ReactDOM from "react-dom";

import './styles/index.css';

const App = () => {
  return (
    <div ClassName = "container">
      <div>
        <h1> Login </h1>
        <label for = "Username"> Username </label>
        <input type = "text" name = "Type your username" />
        <label for = "Password"> Password </label>
        <input type = "text" name = "Type your password" />
        <input type = "radio" name = "Remember Me" /> Remember Me
        <button type = "button"> LOGIN </button>
        
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