import React from "react";
import "./componentstyles/Navbar.css";
import Navlogo from "../Images/ProjectLogo1.png";
import { FaRegUser, FaShoppingCart, FaHeadphonesAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleAlert = () => {
    alert("Please, Authenticate Yourself");
  };
  return (
    <div
      className="App-Navbar"
      style={{ position: "sticky", top: 0, width: "100%", zIndex: "100" }}
    >
      <div className="first-nav-div">
        <img src={Navlogo} alt="website-logo" width="250" />
        <input type="text" placeholder="Search Optlap" />
        <div className="nav-links">
          <FaRegUser />
          <Link to="/signin">Sign In</Link>
        </div>
        <div className="nav-links">
          <FaHeadphonesAlt />
          <p>Contact Us</p>
        </div>
        <div className="nav-links">
          <FaShoppingCart />
          Cart
        </div>
      </div>
      <div className="second-nav-div">
        <ul>
          <Link to="/">Apex</Link>
          <Link to="/products">Products</Link>
          <li onClick={handleAlert} style={{ cursor: "pointer" }}>
            Solutions
          </li>
          <li onClick={handleAlert} style={{ cursor: "pointer" }}>
            Services
          </li>
          <li onClick={handleAlert} style={{ cursor: "pointer" }}>
            Supports
          </li>
          <li onClick={handleAlert} style={{ cursor: "pointer" }}>
            Deals
          </li>
          <li onClick={handleAlert} style={{ cursor: "pointer" }}>
            Find a store
          </li>
          <li onClick={handleAlert} style={{ cursor: "pointer" }}>
            About Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
