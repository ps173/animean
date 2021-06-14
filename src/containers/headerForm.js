import React from "react";
import HeaderForm from "../components/headerForm";
import * as ROUTE from "../constants/routes";

export default function HeaderFormContainer() {
  /* Add google auth later */
  return (
    <>
      <HeaderForm>
        <HeaderForm.Container>
          <HeaderForm.Title> Join now by </HeaderForm.Title>
          <HeaderForm.Wrapper>
            {/* <HeaderForm.Button onClick={googleAuthHandler}> */}
            {/* {" "} Using Google{" "} </HeaderForm.Button> */}
            <HeaderForm.ButtonLink to={ROUTE.LOGIN}>
              {" "}
              Login{" "}
            </HeaderForm.ButtonLink>
            <HeaderForm.ButtonLink to={ROUTE.SIGN_UP}>
              {" "}
              Sign Up{" "}
            </HeaderForm.ButtonLink>
          </HeaderForm.Wrapper>
        </HeaderForm.Container>
      </HeaderForm>
    </>
  );
}
