import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Events from "./pages/Events";
import Parvaah from "./pages/Parvaah";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          {/* for home page */}
          <Route path="/">
            <Home />
          </Route>

          {/* for events page */}
          <Route path="/events">
            <Events />
          </Route>

          {/* for parvaah page */}
          <Route path="/parvaah">
            <Parvaah />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
