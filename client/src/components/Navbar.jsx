import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo"
import { MdDashboard, MdOutlineQrCodeScanner } from "react-icons/md";


function Navbar() {

  
 
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/" className="vi-logo">
          <li>
            <Logo />
          </li>
        </Link>
        <Link to="/scanqrcode" className="scanqrcode">
          <li>
            <MdOutlineQrCodeScanner />
          </li>
        </Link>

        <Link to="/admin/adminlogin" className="adminlogin">
          <li>
            <MdDashboard />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
