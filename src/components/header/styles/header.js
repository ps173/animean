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

export const ProfileImage = styled.img`
    height: 56px;
    width: 56px;
    border-radius: 50%;
    border: 5px solid orchid;
    transition: 0.5s;

    &:hover {
    transition: 0.5s;
    border: 5px solid dodgerblue;
    }
`;

export const Button = styled.button`
    position: absolute;
    right: 14vw;
    width: auto;
    height: 30px;
    background-color: #c60476;
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

  @media (max-width: 600px) {
    right: 24vw;
  }


`;

export const SearchContainer = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
width: 150px;
height: auto;
padding: 1vh;
`;

export const SearchIcon = styled.button`
  height: 26px;
  width: 26px;
  background-color: transparent;
  border-radius: 20px;
  color: white;
  appearance: none;
  outline : none;
  border : none;
`;

export const SearchInput = styled.input`
  height: 36px;
  width: auto;
  margin-right : 10%;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.2);
  padding-left: 15%;
  appearance: none;
  outline : none;
  border : none;
  color:white;
`;

