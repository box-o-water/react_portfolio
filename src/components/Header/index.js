import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
