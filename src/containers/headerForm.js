import React from "react";
import HeaderForm from "../components/headerForm";

export default function HeaderFormContainer() {
  return (
    <>
      <HeaderForm>
        <HeaderForm.Container>
          <HeaderForm.Title> Log In </HeaderForm.Title>
          <HeaderForm.Wrapper>
            <HeaderForm.Button> Using Google </HeaderForm.Button>
            <HeaderForm.Button> Using Email  </HeaderForm.Button>
          </HeaderForm.Wrapper>
        </HeaderForm.Container>
      </HeaderForm>
    </>
  );
}
