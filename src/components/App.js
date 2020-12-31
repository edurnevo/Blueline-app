import React from "react";
import logo from "../images/WingsLogo.jpeg";
import hamburgerLink from "../images/ico-menu.svg";
//import "../stylesheet/App.scss";

function App() {
  return ( 
    <>
  <a className="hamburgerLink" target="_blank"><img src={hamburgerLink} alt="Menú"/></a>
  <div>
    <img className="logo" src={logo} alt="logo"/>
  </div>
  <button type="button">Log in</button>
  </>
  );
}

export default App;
