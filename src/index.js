import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//using Js
//using real DOm
document.getElementById("root").innerHTML = "React";

//using React and render --> creates React DOM - virtual DOM
const el1 = React.createElement("div", {}, React.createElement("h1",{},"Hello World! This is React inside div"),
React.createElement("h2",{},"Hello World! This is React inside div"));
console.log(el1);

const el = React.createElement("h1",{},"Hello World! This is React");
console.log("el",el);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(el);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el1);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
