import styled from "styled-components";

export const ProductScreen = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
  display: flex;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const ScreenLeft = styled.div`
  display: flex;
  flex: 0.8;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    flex: 1;
  }
`

export const ScreenLeftImg = styled.div`
  margin: 1rem;
  flex: 0.6;
  @media screen and (max-width: 960px) {
    flex: 1;
  }
`

export const LeftImg = styled.img`
  max-width: 500px;
  @media screen and (max-width: 600px) {
    max-width: 70%;
  }
`

export const ScreenLeftInfo = styled.div`
  margin: 1rem;
  flex: 0.4;
  background: #fff;
  height: fit-content;
  font-size: 0.9rem;
  @media screen and (max-width: 960px) {
    flex: 1;
  }
`

export const LeftName = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`

export const LeftP = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const ScreenRight = styled.div`
  flex: 0.2;
  @media screen and (max-width: 960px) {
    flex: 1;
  }
`

export const RightInfo = styled.div`
  width: 250px;
  margin: 1rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
`

export const RightP = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const RightSelect = styled.select`
  padding: 10px 16px;
`

export const RightOption = styled.option`
`

export const RightBtn = styled.button`
  grid-column: 1/-1;
  width: 100%;
  padding: 10px 16px;
  background: #171717;
  color: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  border-radius: 5px;
`