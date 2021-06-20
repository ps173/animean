import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
// background-image : ${({ bg }) => bg};


export const ImageContainer = styled.div`
    position: relative;
&:before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-image : ${({ bg }) => bg};
    opacity: 0.3;
}
`;

export const Container = styled.div`
 width: 100%;
 height : 40vh;
 padding-bottom:2%;
 display: flex;
 position: relative;
 align-items:center;
 justify-content:center;
 flex-direction: column;
 z-index: 2;

`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #c60476;
  width: 60px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 20px;
  padding-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  transition : 0.3s;

  &:hover {
    transition : 0.3s;
    background: #874cb2;
  }
`;

export const Text = styled.p`
display:block;
font-size: 1.2rem;
line-height: 150%;
min-width: 300px;
max-width: 600px;
padding-left : 5%;
padding-right : 5%;
`

export const Title = styled.h1`
 color: #c60476;
 height: 10%;
 display: flex;
 justify-content: center;
 align-items:center;
`
