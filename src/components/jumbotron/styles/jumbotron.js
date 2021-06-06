import styled from "styled-components/macro";

export const Border = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 5px solid grey;
  box-shadow: 1px 0px 0px 0px grey;
`;

export const Inner = styled.div`
  display: flex;
  font-family: Arial;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Title = styled.h1``;

export const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: lighter;
`;

export const Panel = styled.div`
  margin: 2vw;
  width: 50%;
`;

export const Image = styled.img`
  height: auto;
  max-width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;
