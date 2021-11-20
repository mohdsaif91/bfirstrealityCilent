import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// import Homeicon from "./images/homeicon.png"
// import "./NavBar.scss";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // #navbar start#

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
        <h3>  BfirstrealityCilent</h3>
            <i className="fas fa-code"></i>
            {/* <div>
        <img src={Homeicon} className="fas " alt="" />
        </div> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/Services" activeClassName="active" className="nav-links" onClick={handleClick} >
                Our Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                Contact Us
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
