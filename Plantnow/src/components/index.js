
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header /> 
  </React.StrictMode>,
 
);


const hamburger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active")
    navList.classList.toggle("show")
})