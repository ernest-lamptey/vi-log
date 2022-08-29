import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

import { MdDashboard } from "react-icons/md";

function Navbar() {

  
 
  return (
    <nav className="navbar">
      <ul
        className="nav-links">
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
