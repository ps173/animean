import React from "react";
import { Container, Title, SubTitle } from "./styles/header";

export default function Header({ children, direction = "row", ...restProps }) {
  return <Container direction={direction}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Links = function HeaderLinks({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
