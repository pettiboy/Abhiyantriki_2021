import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./pages/Events";
import Parvaah from "./pages/parvaah/Parvaah";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ExposAndSpeakers from "./pages/ExposAndSpeakers";
import GetInvolved from "./pages/GetInvolved";
import Sponsors from "./pages/Sponsors";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="App text-white">
        <Switch>
          {/* for home page */}
          <Route path="/" exact>
            <Home />
          </Route>

          {/* for events page */}
          <Route path="/events">
            <Events />
          </Route>

          {/* for get involved page */}
          <Route path="/get-involved">
            <GetInvolved />
          </Route>

          {/* for events page */}
          <Route path="/expos-and-speakers">
            <ExposAndSpeakers />
          </Route>

          {/* for parvaah page */}
          <Route path="/parvaah">
            <Parvaah />
          </Route>

          {/* for Sponsers page */}
          <Route path="/sponsors">
            <Sponsors />
          </Route>
        </Switch>
      </div>
    </Router>
    
    </>
  );
}

export default App;
