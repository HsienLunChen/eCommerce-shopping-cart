import React from 'react'

import {
  Nav,
  NavLogo,
  NavTitle,
  NavLinks,
  NavLinkItem,
  NavLinkCart,
  NavLinkShop,
  CartCount,
  CartNumber,
} from './NavbarElements';

import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <>
      <Nav>
        <NavLogo to='/'>
          <NavTitle>Guitar Trader</NavTitle>
        </NavLogo>

        <NavLinks>
          <NavLinkItem>
            <NavLinkCart to='/cart'>
              <CartCount>
                Cart
                <CartNumber>
                  {getCartCount()}
                </CartNumber>
              </CartCount>
            </NavLinkCart>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkShop to='/'>
              Shop
            </NavLinkShop>
          </NavLinkItem>
        </NavLinks>
      </Nav>
    </>
  )
}

export default Navbar
