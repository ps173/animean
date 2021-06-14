import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #c60476;
  width: auto;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 20px;
  padding-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #874cb2;
  }
`;
export const Logo = styled.img`
  height: 56px;
  width: 164px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
