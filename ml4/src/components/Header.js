import React from "react";
import Navbar from "./Nav";
import Home from "./Home1";
import "./Header.css";
import "./Home.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Home />
    </div>
  );
};

export default Header;