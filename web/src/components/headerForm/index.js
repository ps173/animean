import React from "react";
import {
  Inner,
  Container,
  Wrapper,
  Title,
  Button,
  Input,
  ButtonText,
  ButtonLink,
} from "./styles/headerForm";

export default function HeaderForm({ children, ...restprops }) {
  return <Inner {...restprops}>{children}</Inner>;
}

HeaderForm.Container = function HeaderFormContainer({
  children,
  ...restprops
}) {
  return <Container {...restprops}> {children} </Container>;
};

HeaderForm.Title = function HeaderFormTitle({ children, ...restprops }) {
  return <Title {...restprops}> {children} </Title>;
};

HeaderForm.Wrapper = function HeaderFormWrapper({ children, ...restprops }) {
  return <Wrapper {...restprops}> {children} </Wrapper>;
};

HeaderForm.ButtonLink = function HeaderFormButton({
  to,
  children,
  ...restprops
}) {
  return (
    <ButtonLink to={to} {...restprops}>
      <ButtonText> {children} </ButtonText>
    </ButtonLink>
  );
};

HeaderForm.Button = function HeaderFormButton({ children, ...restprops }) {
  return <Button {...restprops}> {children} </Button>;
};

HeaderForm.Input = function HeaderFormInput({ ...restprops }) {
  return <Input {...restprops} />;
};
