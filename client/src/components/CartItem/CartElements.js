import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CartWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background: #fff;
  border-radius: 2px;
  place-items: center;
  margin-bottom: 8px;
`
export const CartImgWrapper = styled.div`
  max-width: 300px;
`

export const CartImg = styled.img`
  max-width: 200px;
  max-height:300px;
  @media screen and (max-width: 700px) {
    max-width: 150px;
    max-height: 225px;
  }
`

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #171717;

  &:hover {
    color: #dd219e;
    transform: scale(1.2);
  }

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
  }
`
export const LinkName = styled.p`
  text-decoration: none;
  color: #171717;

  &:hover {
    color: #dd219e;
  }
`

export const  ItemP = styled.p`
font-size: 1rem;
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
  }
`

export const ItemSelect = styled.select`
  padding: 10px 17px;
  @media screen and (max-width: 700px) {
    padding: 5px 8px;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
  }
`

export const ItemOption = styled.option`
`

export const ItemBtn = styled.button`
  padding: 10px 17px;
  color: red;
  background: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  transition: all 0.3s ease-out;
  @media screen and (max-width: 700px) {
    padding: 5px 8px;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.6rem;
  }
`

export const ItemIcon = styled.i`

`