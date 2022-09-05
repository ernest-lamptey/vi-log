import React from "react";
import "../styles/Dashboard.scss";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome, AiOutlineMail, AiOutlinePieChart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import VisitorInfo from "./VisitorInfo";

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

        <Table />

          <div className="head">
            <div className="head-title">
              <h2>Visitor Info</h2>
            </div>
          </div>
        </div>
         
      <VisitorInfo />

      </div>
    </div>
  );
}

export default Dashboard;