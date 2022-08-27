import React from 'react';
import "../styles/Header.scss";
// import { MdDashboard } from 'react-icons';
import { MdDashboard } from "react-icons/md";


function Header() {
  return (
      <nav className='nav'>
          {/* <a href="#" className='nav_brand'>herdoy</a> */}
          <ul className='nav_menu'>
              <li className='nav_item'><a href="#" className='nav_link'>Dashboard</a></li>
          </ul>
         <div className="nav_toggler">
             <div className="line1"></div>
             <div className="line1"></div>
             <div className="line1"></div>
         </div>
      </nav>
  )
}

export default Header
