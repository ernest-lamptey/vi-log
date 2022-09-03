import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo"
import { MdDashboard } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

function Navbar() {

  
 
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/home" className="vi-logo">
          <li>
            <Logo />
          </li>
        </Link>
        <Link to="/scanqrcode" className="scanqrcode">
          <li>
            <BsFillCameraFill />
          </li>
        </Link>
        <Link to="/dashboard" className="dashboard">
          <li>
            <MdDashboard />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
