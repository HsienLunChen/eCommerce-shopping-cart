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

const Navbar = () => {
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
                  0
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
