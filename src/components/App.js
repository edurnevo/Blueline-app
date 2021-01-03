import React from "react";
import logo from "../images/WingsLogo.jpeg";
import hamburgerLink from "../images/ico-menu.svg";
import "../stylesheet/App.scss";

function App() {
  return ( 
      <div className="landing">
        <a className="landing_hamburgerLink" target="_blank"><img className="landing_hamburgerLink_lines" src={hamburgerLink} alt="Menú"/></a>
        <img className="landing_logo" src={logo} alt="logo"/>
        <button className="landing_btn" type="button">Log in</button>
      </div>
  );
}

export default App;
  