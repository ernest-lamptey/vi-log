import React, { useState } from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

import { MdDashboard } from "react-icons/md";

function Navbar() {
    const [ isMobile, setIsMobile ] = useState(false);
  
 
  return (
    <nav className="navbar">
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="/dashboard" className="dashboard">
          <li>
            <MdDashboard />
          </li>
        </Link>
      </ul>
      <button className="mobile-menu-icon">
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
