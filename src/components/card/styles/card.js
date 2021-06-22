import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  margin: 4%;
  grid-gaps: 1%;
  width: 96%;
`;

export const Container = styled.div`
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: #4d4e4f50;
  transition: 0.3s;

  &:hover {
    background-color: #57575f80;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Title = styled.h1`
  color: #e50f9d;
`;

export const Text = styled.p`
  margin: auto;
  padding: 5%;
  width: 90%;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  padding: 2%;
  margin-bottom: 5%;
  width: 30%;
  height: 5%;
  border-radius: 30px;
  background-color: #b50e7d;
  color: white;
  outline: none;
  appearance: none;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: #7d34cd;
  }
`;
