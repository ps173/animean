import React, { useState } from "react";
import { Header, Banner, Card } from "../components";
import { firebase } from "../lib/firebase.prod.js";
import * as ROUTES from "../constants/routes";
import { FiUser } from "react-icons/fi";
import logo from "../logo.png";

export function BrowseContainer({ user }) {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    <Header.SearchBar value={value} handleChange={handleChange} />
                    {user.photoURL ? (
                        <Header.ProfileImage src={user.photoURL} />
                    ) : (
                        <FiUser />
                    )}
                    <Header.Button
                        onClick={() => {
                            firebase.auth().signOut();
                        }}
                    >
                        {" "}
                        Logout{" "}
                    </Header.Button>
                </Header.Frame>
            </Header>
            <Banner.Frame bg="url('/images/misc/Tokyo-Revengers.jpg')">
                <Banner.Title> Tokyo Revengers </Banner.Title>
                <Banner.Text>
                    Takemichi Hangaki dies and comes to 12 years in past and something
                    like that happens and becomes friends with mikey kun and joins tokyo
                    manji gang. This is a weird and hyped series and yet manages to be
                    seriously goood. Watch It now bishsash
                </Banner.Text>
                <Banner.ButtonLink to={"/login"}>Watch It </Banner.ButtonLink>
            </Banner.Frame>
            <Card>
                <Card.Container>
                    <Card.Title>Goblin Slayer</Card.Title>
                    <Card.Image src={"/images/misc/gobslayer.jpeg"} />
                    <Card.Text>
                        It is a thot slayer anime where goblin go spank tha bich ass and get
                        slayed by a real chad whos aim is to kill all the goblin fucks
                    </Card.Text>
                    <Card.Button> Watch It </Card.Button>
                </Card.Container>

                <Card.Container>
                    <Card.Title>Mushukou Tensei</Card.Title>
                    <Card.Image src={"/images/misc/mtjbreca.jpg"} />
                    <Card.Text>
                        This is tha granddaddy Isekai and Shit's about to get real Gogoi
                        obobobob aoskdjaks knaskdnksnd vshooooooooooooommmm
                    </Card.Text>
                    <Card.Button> Watch It </Card.Button>
                </Card.Container>

                <Card.Container>
                    <Card.Title>One punch man</Card.Title>
                    <Card.Image src={"/images/misc/onepunchman.webp"} />
                    <Card.Text>
                        Watch a bald man beat shit out of monster bishsash. and ooh boi he
                        is stonk really stonk I mean
                    </Card.Text>
                    <Card.Button> Watch It </Card.Button>
                </Card.Container>
            </Card>
        </>
    );
}
