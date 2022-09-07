import React, { useState } from "react";
import "../styles/Dashboard.scss";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome, AiOutlineMail, AiOutlinePieChart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import VisitorInfo from "./VisitorInfo";
import { UserData } from "./Data";
import Table from "./Table";
import PieChart from "./PieChart";


function Dashboard() {
  
  const [ userData, setUserData ] = useState({
    labls: UserData.map((data) => data.totalVisitors),
    datasets: [
    {
      label: "Total Visitors",
      data: UserData.map((data) => data.hostId),
      backgroundColor: [
        "rgba(75,192,1921)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0"
      ],
    },
  
  ],
  });



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
      <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default Dashboard;