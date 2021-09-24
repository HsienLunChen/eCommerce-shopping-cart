import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CartScreen = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 2rem auto;

  @media screen and (max-width: 1320px) {
    max-width: 980px;
  }

  @media screen and (max-width: 960px) {
    max-width: 800px;
    flex-direction: column;
  }
`

export const CartLeft = styled.div`
  flex: 0.7;
  margin-right: 1rem;
  background: transparent;
  padding: 1rem;
`

export const CartTitle = styled.h2`
  margin-bottom: 1rem;
`

export const CartRight = styled.div`
  flex: 0.3;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
  margin-top: 50px;
  @media screen and (max-width: 960px) {
    margin: 1rem;
  }
`

export const ReturnBtn = styled(Link)`

`

export const CartInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
`

export const CartP = styled.p`
   padding: 8px;
`

export const CartBtn = styled.div`
`

export const Btn = styled.button`
  padding: 10px 17px;
  width: 100%;
  background: #171717;
  color: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
`
