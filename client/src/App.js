import "./App.css";
import User from "./components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from './components/Header'

function App() {
  return (
    <Router>
        <Header />
        <User />
        <Switch>
          <Route path="/dashboard">
            <Dashboard /> 
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
