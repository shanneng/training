import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return(
    <>
  <div>
    <label> color red </label>
    <label> color blue </label>
  </div>
    </>
  )
  
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);