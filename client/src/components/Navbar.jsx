import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

function Navbar() {

  
 
  return (
    <nav className="navbar">
      <ul className="nav-links">
         {/* <Link to="/"  className="nav__brand">
          <li>
            Vi-Log
          </li>
         </Link> */}
        <Link to="/dashboard" className="dashboard">
          <li>
            <MdDashboard />
          </li>
        </Link>
        <Link to="/scanqrcode" className="scanqrcode">
          <li>
            <BsFillCameraFill />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
