import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";

export default function HeaderContainer() {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_UP}>Sign up</Header.ButtonLink>
            </Header.Frame>
        </Header>
    );
}
