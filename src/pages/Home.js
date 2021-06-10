import React from "react";
import JumboContainer from "../containers/jumbotron";
import Footer from "../containers/footer";
import HeaderContainer from "../containers/header";
import HeaderFormContainer from "../containers/headerForm";

export default function Home() {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <HeaderFormContainer />
      <JumboContainer />
      <Footer />
    </div>
  );
}
