import React from "react";
import "../styles/Navbar.scss";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { MdDashboard, MdOutlineQrCodeScanner } from "react-icons/md";


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <NavLink to="/" className="vi-logo">
          <li>
            <Logo />
          </li>
        </NavLink>
        <NavLink
          to="/scanqrcode"
          className="scanqrcode"
          activeStyle={{ color: "orange" }}
        >
          <li>
            <MdOutlineQrCodeScanner />
          </li>
        </NavLink>

        <NavLink
          to="/admin/adminlogin"
          className="adminlogin"
          activeStyle={{ color: "orange" }}
        >
          <li>
            <MdDashboard />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
