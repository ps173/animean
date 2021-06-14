import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  padding: auto;
`;

export const Container = styled.div`
  width: 40%;
  height: 70%;
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #ff1177;
`;

export const Button = styled.button`
  background: #c60476;
  width: 150px;
  height: 50px;
  margin-bottom: 5px;
  margin-right: 15px;
  margin-top: 5px;
  outline: none;
  border: none;
  color: white;

  &:hover {
    background: #874cb2;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  background: #c60476;
  width: 150px;
  height: 50px;
  margin-bottom: 5px;
  margin-right: 15px;
  margin-top: 5px;
  outline: none;
  border: none;
  color: white;
  text-align: center;
  text-decoration : none !important

  &:hover {
    background: #874cb2;
  }

`;

export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
`;

export const Input = styled.input``;
