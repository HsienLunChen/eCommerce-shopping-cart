import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 10;
`

export const NavLogo = styled(Link)`
  margin-left: 40px;
  text-decoration: none;
`

export const NavTitle = styled.h2`
  color: #f4f4f4;
  font-size: 1.4rem;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`

export const NavLinkItem = styled.li`
  padding-left: 1.5rem;
`

export const NavLinkCart = styled(Link)`
  text-decoration: none;
  color: #f4f4f4;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`

export const CartCount = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;

`

export const CartNumber = styled.span`
  width: 30px;
  height: 30px;
  background-color: #f4f4f4;
  border-radius: 50%;
  margin-left: 8px;
  color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`

export const NavLinkShop = styled(Link)`
  text-decoration: none;
  color: #f4f4f4;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`

