import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import ReactApp from './ReactApp';
import reportWebVitals from './reportWebVitals';


/*React handles the rendering using the virtual DOM
A virtual DOM is a programming concept where a virtual representation of a UI is kept in memory and synced with the browser DOM by ReactDOM.
The ReactDOM.render() function renders the JSX with the id="root".
The "root" marks the spot where we want to display our entire application*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
