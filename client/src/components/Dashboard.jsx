import React from "react";
import "../styles/Dashboard.scss";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome, AiOutlineMail, AiOutlinePieChart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import { BsPeople, BsPersonPlus, BsPersonCheck } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

import Table from "./Table";
function Dashboard() {
  return (
    <div className="wrap">
      <div className="sidebar">
        <ul>
          <li className="active">
            <AiOutlineHome className="fas" />
          </li>
          <li>
            <AiOutlinePieChart className="fas" />
          </li>
          <li>
            <AiOutlineMail className="fas" />
          </li>
          <li>
            <BiExport className="fas" />
          </li>
          <li>
            <MdLogout className="fas" />
          </li>
        </ul>
      </div>

      <div className="main">
        <div className="head">
          <div className="head-title">
            <span>
              <RiAdminLine className="admin" />
            </span>
            <h2>Dashboard</h2>
          </div>
          <div className="head-search">
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="main-board">
          <div className="card-board">
            <div className="card">
              <div className="card-icon">
                <BsPeople className="fa" />
                <FaEllipsisV />
              </div>
              <span>Total number of visitors</span>
              <p>50</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <IoIosPeople className="fa" />
                <FaEllipsisV />
              </div>
              <span>Visitors on Premises</span>
              <p>20</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <BsPersonPlus className="fa" />
                <FaEllipsisV />
              </div>
              <span>All visitors for the day</span>
              <p>30</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <BsPersonCheck className="fa" />
                <FaEllipsisV />
              </div>
              <span>Visitors checkedout</span>
              <p>25</p>
            </div>
          </div>
          <div className="head">
            <div className="head-title">
              <h2>Visistor Info</h2>
            </div>
          </div>
        </div>
         
       <div className="name">
         <div className="name-details">
           <ul className="details">
             <li className="topic">Date</li>
             <li><a href="@">01 - 05 2022</a></li>
             <li><a href="@">05 - 10 2022</a></li>
             <li><a href="@">01 - 01 2022</a></li>
             <li><a href="@">27 - 08 2022</a></li>
           </ul>
           <ul className="details">
             <li className="topic">Date</li>
             <li><a href="@">01 - 05 2022</a></li>
             <li><a href="@">05 - 10 2022</a></li>
             <li><a href="@">01 - 01 2022</a></li>
             <li><a href="@">27 - 08 2022</a></li>
           </ul>
           <ul className="details">
             <li className="topic">Date</li>
             <li><a href="@">01 - 05 2022</a></li>
             <li><a href="@">05 - 10 2022</a></li>
             <li><a href="@">01 - 01 2022</a></li>
             <li><a href="@">27 - 08 2022</a></li>
           </ul>
         </div>
         </div>  

      </div>
    </div>
  );
}

export default Dashboard;