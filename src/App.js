import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Manaki from "./component/Manaki/Manaki";
import Home from "./component/Home/Home";
import Waitlist from "./component/Waitlist/Waitlist";

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/manaki">Manaki App Participants</Link>
            </li>
            <li>
              <Link to="/waitlist">Waitlist App Participants</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/manaki">
            <Manaki />
          </Route>
          <Route path="/waitlist">
            <Waitlist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
