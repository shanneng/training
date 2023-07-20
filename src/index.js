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
        </div>
        <div className="side-color">
          
        </div>
      </div>
    </div>
  )
  
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);