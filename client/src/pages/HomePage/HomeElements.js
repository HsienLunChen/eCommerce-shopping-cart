import styled from "styled-components";

export const HomeScreen = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
`

export const HomeTitle = styled.h2`
  font-size: 1.5rem;
  color: #171717;
  margin-bottom: 1rem;
  margin-left: 20px;
`

export const HomeProducts = styled.div`
  display: grid;
  margin-left: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

