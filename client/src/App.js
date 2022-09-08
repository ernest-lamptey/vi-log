import React from "react";
import "./App.css";
import User from "./components/User";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ScanQrCode from "./components/ScanQrCode";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import SignOut from "./components/SignOut";
// import PieChart from "./components/PieChart";


function App() {

  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/visitors" component={User} exact>
          <User />
        </Route>

        <Route path="/adminlogin" component={AdminLogin}>
          <AdminLogin />
        </Route>

        <ProtectedRoute path="/dashboard" component={Dashboard} auth={false}/>


        <Route path="/scanqrcode" component={ScanQrCode}>
          <ScanQrCode />
        </Route>

        <Route path="/signout" component={SignOut}>
          <SignOut />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
