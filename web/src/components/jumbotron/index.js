import React from "react";
import {
  Border,
  Inner,
  Container,
  Panel,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";

export default function Jumbo({ children, direction = "row", ...restProps }) {
  return (
    <Border>
      <Inner direction={direction}>{children}</Inner>
    </Border>
  );
}

Jumbo.Container = function JumboContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbo.Title = function JumboContainer({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbo.SubTitle = function JumboContainer({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbo.Panel = function JumboContainer({ children, ...restProps }) {
  return <Panel {...restProps}>{children}</Panel>;
};

Jumbo.Image = function JumboContainer({ ...restProps }) {
  return <Image {...restProps} />;
};
