import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ProductContainer = styled.div`
  width: 300px;
  padding: 1rem;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
`

export const ProductImg = styled.img`
  width: 100%;
  height: 170px;
  object-fit: contain;
  border-radius: 8px;

`

export const ProductInfo = styled.div`
`

export const ProductName = styled.p`
  font-size: 1rem;
  overflow: hidden;
`

export const ProductDesc = styled.p`
  font-size: 0.8rem;
`

export const ProductPrice = styled.p`
  font-weight: bold;
`

export const InfoBtn = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  color: #171717;
  width: 100%;
  padding: 8px 16px;
  background-color: #f4f4f4;
  border: 1px solid #171717;
  font-size: 1rem;

  &:hover {
    background: #171717;
    color: #f4f4f4;
  }
`