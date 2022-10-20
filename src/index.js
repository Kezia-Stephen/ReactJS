import React, {createElement,Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import srcImg from './logo192.png'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Home from "./pages/Home/Home";

//using Js
//using real DOm
document.getElementById("root").innerHTML = "React";

//using React and render --> creates React DOM - virtual DOM
// const el1 = React.createElement("div", {style:{backgroundColor:"#FF8787"}}, React.createElement("h1",{style:{color:"#CDFCF6"}},"Hello World! This is React inside div"),
// React.createElement("h2",{style:{color:"#4649FF"}},"Hello World! This is React inside div"));
// console.log(el1);

//React Session09
const el1 = React.createElement("div", {className:"bg-color"}, React.createElement("h1",{style:{color:"#CDFCF6"}},"Hello World! This is React inside div"),
React.createElement("h2",{style:{color:"#4649FF"}},"Hello World! This is React inside div"));
console.log(el1);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(el1);

// const el = React.createElement("h1",{},"Hello World! This is React");
// console.log("el",el);

// //Using JSX
// var text = "Text inside quotes "

// const el = (
// <div style={{color:"#4649FF", backgroundColor:"#CDFCF6"}} className={"div-el"}>
//   React
//   <h1>JS</h1> {text}
//   {2+6} {true? "True" : "False"}
// </div>) ;

// const productName = ["aaa", "bbb", "ccc"]; //array of strings

// const obj = {
//   name:"kkk",
//   age:24,
//   feature: "React",
// }; // object

// //linking css with className
// const el = (
//   <div className={"textStyle"}>
//     React
//     <h1>JS</h1> {text}
//     {2+6} {true? "True" : "False"}
//     <img src={srcImg}/>
//     {productName.map((name, index)=> <p key={index}>{name}</p>)}

//     {Object.keys(obj).map((item, index) => <div key={index}><p>{item}: {obj[item]}</p></div>)}
//   </div>) ;

// //React Session10 -> React Components
// //Function Component
// function Second(){
//   return <div>Second Component</div>
//  }

// function First(){
//  return <div>First Component</div>
// }

// function Main(){
//   return (
//     <div>Function Component in React
//     <h1>Heading tag inside function</h1>
//     <First/>
//     <Second/>
//   </div>
//   );
// }

//Class Component - React Session11
function SampleFun(){
  return (<div>Sample Function</div>);
}

class First extends Component{
  render() {
    return <div>First Component <Second/></div>
  }
}

class Second extends Component{
  render() {
    return <div>Second Component </div>
  }
}

class Main extends Component{
  render() {
    return ( 
    <div>Class Component 
      <First/>
      {/* <SampleFun /> */}
    </div>)
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);


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
