import styled from "styled-components/macro";

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
  display:flex;
`;

export const Title = styled.h1`
color : #ff1177;
`;

export const Button = styled.button`
background : #C60476;
width : 150px;
height : 50px;
margin-bottom : 5px;
margin-right : 15px;
margin-top : 5px;
outline : none;
border : none; 
color : white;

&:hover{
  background:#874CB2;
}
`;

export const Input = styled.input``;
