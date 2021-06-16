import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, SignIn, Login, Browse } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/Routes";

function App() {
  const user = null;

  return (
    <Router>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.LOGIN}>
        <Login />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}

export default App;
