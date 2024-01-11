import React from "react";
import Slider from "../../components/Slider";
import { NavLink } from "react-router-dom";
import "./index.scss"

function Navbar() {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="header">
          <div className="left"><h3>Floral Studio</h3></div>
          <div className="right">
            <ul className="pages">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink>About us</NavLink></li>
              <li><NavLink>Portfolio</NavLink></li>
              <li><NavLink to={"/AddPages"}>Add Pages</NavLink></li>
              <li><NavLink>Contacts</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <Slider></Slider>
    </div>
  );
}

export default Navbar;
