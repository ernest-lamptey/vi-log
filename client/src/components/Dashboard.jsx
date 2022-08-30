import React from "react";
import "../styles/Dashboard.scss";
import logo from "../assets/Amalitech-Ghana.png";
function Dashboard() {
  return (
    <section>
      <div className="container">
        <nav className="header">
          <ul>
            <li>
              <a href="#" className="logo">
                <img src={logo} alt="/" />
                <span className="nav-item">Admin</span>
                <li><a href="#">
                  <i className="fas fa-menorah"></i>
                  <span className="nav-item">Dashboard</span>
                  </a></li>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Dashboard;
