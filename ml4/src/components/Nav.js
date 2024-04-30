import React, { useState } from "react";
import Sidebar from "./Sidebar1";
import "./Nav.css";
import logo from "../assets/img/jexter.png";

const Nav = () => {
  let ChangeClass = {
    home: "fas fa-bars",
    cross: "fas fa-times",
  };
  const [icon, setIcon] = useState(ChangeClass.home);
  const ChangeIcon = () => {
    if (icon === ChangeClass.home) {
      setIcon(ChangeClass.cross);
    } else {
      setIcon(ChangeClass.home);
    }
  };

  return (
    <React.Fragment>
      <nav>
        {" "}
        <Sidebar />
        <a>
          <img src={logo} id="Logo" />
        </a>
        <div
          id="navbar"
          className={icon === ChangeClass.cross ? "#navbar close" : "#navbar"}
        >
          <ul>
            <li>
              <a href="true">Home</a>
              <a href="true">About</a>
              <a href="true">Portfolio</a>
              <a href="true">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
