import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="logo">Logo</h3>
      <div>
        <ul className="navlinks">
          <li>Home</li>
          <li>About</li>
          <li>Class Component</li>
          <li>Functional Component</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
