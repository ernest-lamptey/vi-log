import React from "react";
import "../styles/Dashboard.scss";
import { BrowserRouter as Router, Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome, AiOutlineMail, AiOutlinePieChart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import Reports from "./Reports"
import DailyStats from "./DailyStats";
import Manage from "./Manage"

function Dashboard() {
  const { path } = useRouteMatch()
  console.log(path)
  return (
    <Router>
        <ul className="dashboard-links">
          <NavLink to="/dashboard">
            <li>Dashboard</li>
          </NavLink>
          <NavLink to="/dashboard/reports">
            <li>Reports</li>
          </NavLink>
          <NavLink to="/dashboard/manage">
            <li>Manage</li>
          </NavLink>
        </ul>
      <Switch>
        <Route exact path={`${path}`} component={DailyStats}>
          <DailyStats />
        </Route>

        <Route exact path={`${path}/reports`} component={Reports}>
          <Reports />
        </Route>

        <Route exact path={`${path}/manage`} component={Manage}>
          <Manage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Dashboard;