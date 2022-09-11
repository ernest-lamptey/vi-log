import React from "react";
import "../styles/Dashboard.scss";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome, AiOutlineMail, AiOutlinePieChart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import Reports from "./Reports"
import DailyStats from "./DailyStats";

function Dashboard() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={DailyStats}>
          <DailyStats />
        </Route>

        <Route path="/reports" component={Reports}>
          <Reports />
        </Route>

      </Switch>
    </Router>
  );
}

export default Dashboard;