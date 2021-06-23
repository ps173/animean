import React from "react";
import {
  Text,
  Image,
  Title,
  Button,
  CardContainer,
  Container,
} from "./styles/card";

export default function Card({ children, ...restprops }) {
  return <CardContainer {...restprops}>{children}</CardContainer>;
}

Card.Container = function CardContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};

Card.Title = function CardTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Card.Text = function CardText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};

Card.Image = function CardImage({ children, ...restprops }) {
  return <Image {...restprops} />;
};

Card.Button = function CardButton({ children, ...restprops }) {
  return <Button {...restprops}>{children}</Button>;
};
