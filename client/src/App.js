import "./App.css";
import User from "./components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          
      </Switch>
    </Router>
  );
}

export default App;
