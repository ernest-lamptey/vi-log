import React from 'react'
import "../styles/Dashboard.scss"
import logo from "../assets/Amalitech-Ghana.png"
function Dashboard() {
  return (
    <div className='body'>
    <div className='container'>
      <nav>
        <ul>
          <li><a href="#" className='logo'>
             <img src={logo} alt="/" />
             <span className='nav-item'>Admin</span>
            </a></li>
        </ul>
      </nav>
        
        
          
        </div>
    </div>
  )
}

export default Dashboard