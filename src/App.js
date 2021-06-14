import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, SignIn, Login } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.LOGIN}>
        <Login />
      </Route>
    </Router>
  );
}

export default App;
