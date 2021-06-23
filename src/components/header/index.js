import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Container,
  ButtonLink,
  Logo,
  ProfileImage,
  Button,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles/header";
import { FiSearch } from "react-icons/fi";

export default function Header({ children }) {
  return children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.ProfileImage = function HeaderProfileImage({ ...restProps }) {
  return <ProfileImage {...restProps} />;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}> {children} </Button>;
};

Header.SearchBar = function HeaderSearchBar({
  value,
  handleChange,
  ...restProps
}) {
  return (
    <SearchContainer {...restProps}>
      <SearchInput placeholder="Search" onChange={handleChange} value={value} />
      <SearchIcon>
        {" "}
        <FiSearch />{" "}
      </SearchIcon>
    </SearchContainer>
  );
};
