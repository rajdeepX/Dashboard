import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={"/"} className="nav-link">
            <p className="link-text">Contacts</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/charts"} className="nav-link">
            <span className="link-text">Charts and Maps</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
