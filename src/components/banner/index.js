import React from "react";
import { Container, ButtonLink, Text, Title, ImageContainer } from "./styles/banner";

export default function Banner({ children }) {
    return children;
}

Banner.Frame = function BannerFrame({ bg = "black", children, ...restProps }) {
    return <ImageContainer bg={bg} ><Container {...restProps}>{children}</Container></ImageContainer>;
};

Banner.ButtonLink = function BannerButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Banner.Title = function BannerTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Banner.Text = function BannerText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

