import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path="/user">
        <p> I am a user</p>
      </Route>
    </Router>
  );
}

export default App;
