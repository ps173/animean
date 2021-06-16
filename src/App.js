import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, SignIn, Login, Browse } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/Routes";

function App() {
    const user = null;

    return (
        <Router>
            <Switch>
                <IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user} path={ROUTES.SIGN_UP} exact >
                    <SignIn />
                </IsUserRedirect>
                <IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user} path={ROUTES.LOGIN} exact >
                    <Login />
                </IsUserRedirect>
                <Route exact path={ROUTES.HOME}>
                    <Home />
                </Route>
                <ProtectedRoute user={user} pathname={ROUTES.SIGN_UP} exact path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
            </Switch>
        </Router>
    );
}

export default App;
