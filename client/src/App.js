import React from "react";
import "./App.css";
import User from "./components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { ScanQrCode } from "./components/ScanQrCode";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={User} exact>
          <User />
        </Route>

        <Route path="/dashboard" component={Dashboard}>
          <Dashboard />
        </Route>

        <Route path="/scanqrcode" component={ScanQrCode}>
          <ScanQrCode />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
