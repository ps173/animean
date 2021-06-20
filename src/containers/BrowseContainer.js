import React from "react"
import { Header, Banner } from "../components";
import { firebase } from "../lib/firebase.prod.js";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";

export function BrowseContainer({ user }) {
    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    <Header.ProfileImage src={user.photoURL ? user.photoURL : "/images/misc/sample-profile.png"} />
                    <Header.Button onClick={() => { firebase.auth().signOut() }}> Logout </Header.Button>
                </Header.Frame>
            </Header>
            <Banner.Frame bg="url('/images/misc/Tokyo-Revengers.jpg')">
                <Banner.Title> Tokyo Revengers </Banner.Title>
                <Banner.Text>

                    Takemichi Hangaki dies and comes to 12 years
                    in past and something like that happens and
                    becomes friends with mikey kun and joins tokyo
                    manji gang.

                    This is a weird and hyped series and yet
                    manages to be seriously goood. Watch It
                    now bishsash
                </Banner.Text>
                <Banner.ButtonLink to={"/login"}>Watch It </Banner.ButtonLink>
            </Banner.Frame>
        </>
    )
}

