import React from "react";
import "../styles/Dashboard.scss";
import logo from "../assets/Amalitech-Ghana.png";
import { MdDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Cards from "./Cards";
function Dashboard() {
  return (
    <section>
      {/* <div> */}
      <div className="wrapper">
        <nav className="header">
          <ul>
            <li>
              <a href="#" className="logo">
                <img src={logo} alt="/" />
              </a>
            </li>
            <span className="nav-item">Admin</span>
            <li>
              <a href="#">
                <MdDashboard className="fas" />
                <span className="nav-item">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <IoMdContact className="fas" />
                <span className="nav-item">Contact</span>
              </a>
            </li>

            <li>
              <a href="#">
                <TbReportSearch className="fas" />
                <span className="nav-item">Report</span>
              </a>
            </li>
            <li className="logout">
              <a href="#">
                <MdLogout className="fas" />
                <span className="nav-item">Logout</span>
              </a>
            </li>
          </ul>
        </nav>

        <section className="main">
          <div className="main-top">
            <h1>Total Visitors</h1>
            <BsFillPersonLinesFill className="person" />
          </div>

         <Cards />



         <section className="attendance">
            <div className="attendance-list">
              <h1>Visitors List</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Arrive Time</th>
                    <th>Depart Time</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>01</th>
                    <th>Prince Quarshie</th>
                    <th>Design</th>
                    <th>03-24-22</th>
                    <th>08:00AM</th>
                    <th>3:00PM</th>
                    <td><button>View</button></td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Arrive Time</th>
                    <th>Depart Time</th>
                    <th>Details</th>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Prince Quarshie</td>
                    <td>Design</td>
                    <td>03-31-22</td>
                    <td>8:00AM</td>
                    <td>3:00PM</td>
                    <td><button>View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
         </section>
      
        </section>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Dashboard;
