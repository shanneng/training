// Rendering 
import React from 'react';

// DOM
import  ReactDOM from 'react-dom';

// Function based component
const App = () => {

    return 'Hello World';
}

export default App; //for exporting the function

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);