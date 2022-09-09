import React from "react";
import "../styles/Dashboard.scss";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome, AiOutlineMail, AiOutlinePieChart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import BusiestHosts from "./BusiestHosts";
import SignedInVisitors from "./SignedInVisitors";
import DailyVisits from "./DailyVisits";

function Dashboard() {
  return (
    <div className="wrap">
      <div className="main">
        <div className="head">
          <div className="head-title">
            <h2>Dashboard</h2>
          </div>
          <div className="head-search">
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="main-board">

          <div className="head">
            <div className="head-title">

            </div>
          </div>
        </div>
      <SignedInVisitors />
      <DailyVisits />
      {/* <BusiestHosts /> */}

      </div>
    </div>
  );
}

export default Dashboard;