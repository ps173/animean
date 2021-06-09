import React from "react";
import { Container, Title, Button, Input, Wrapper } from "./styles/header-form";
// Container
// Google Auth form

export default function HeaderForm({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

HeaderForm.Wrapper = function HeaderWrapper({ children, ...restprops }) {
  return <Wrapper {...restprops}> {children} </Wrapper>;
};

HeaderForm.Title = function HeaderTitle({ children, ...restprops }) {
  return <Title {...restprops}> {children} </Title>;
};

HeaderForm.Button = function HeaderButton({ children, ...restprops }) {
  return <Button {...restprops}> {children} </Button>;
};

HeaderForm.Input = function HeaderInput({ ...restprops }) {
  return <Input {...restprops} />;
};
