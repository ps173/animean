import React from "react";
import JumboContainer from "../containers/jumbotron";
import Footer from "../containers/footer";
import HeaderContainer from "../containers/header";

export default function Home() {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <JumboContainer />
      <Footer />
    </div>
  );
}
