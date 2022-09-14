import React from "react";
import "../styles/Dashboard.scss";
import { BrowserRouter as Router, Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
import Reports from "./Reports"
import DailyStats from "./DailyStats";
import Manage from "./Manage"
import AuthService from './auth-service'
import { useState } from "react";
import {useHistory} from 'react-router-dom';

function Dashboard() {
  const { path } = useRouteMatch()
  const [dispConfirmModal, setDispConfirmModal] = useState(false);
  const [modalToggle, setModalToggle] = useState(false)
  const history = useHistory()
  const handleLogout = () => {
    AuthService.logout()
    history.push('/adminlogin')
  }

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
          <button onClick={(e) => {
            setModalToggle(true)
            setDispConfirmModal(true)
          }}className="dashboard-logout-btn">Logout</button>
        </ul>
        <div style={{display: modalToggle ? '' : 'none'}}className='confirm'>
          <div className='overlay'></div>
          <div style={{display: dispConfirmModal ? '' : 'none' }}className='confirm-modal'>
              <p>Are you sure you want to logout?</p>
              <button className='confirm-yes' onClick={(e) => {
                  handleLogout()
                  setDispConfirmModal(false)
                  setModalToggle(false)
              }}>Yes</button>
              <button className='confirm-cancel' onClick={(e) => {
                  setDispConfirmModal(false)
                  setModalToggle(false)
              }}>Cancel</button>
          </div>
        </div>
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


