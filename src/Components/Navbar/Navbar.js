import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="logo">Logo</h3>
      <div>
        <ul className="navlinks">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/aboutus">
            <li>About</li>
          </Link>
          <Link to="/functional">
            <li>Functional Component</li>
          </Link>
          <Link to="/class">
            <li>Class Component</li>
          </Link>
          <Link to="/contactus">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
