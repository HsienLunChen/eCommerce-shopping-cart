import React from 'react'

import {
  CartScreen,
  CartLeft,
  CartTitle,
  CartRight,
  CartInfo,
  CartP,
  CartBtn,
  Btn
} from './CartPageElements'

import CartItem from '../../components/CartItem'

const CartPage = () => {
  return (
    <>
      <CartScreen>
        <CartLeft>
          <CartTitle>Shopping Cart</CartTitle>
          <CartItem

          ></CartItem>
        </CartLeft>
        <CartRight>
          <CartInfo>
            <CartP>Subtotal: 5items</CartP>
            <CartP>$400</CartP>
          </CartInfo>
          <CartBtn>
            <Btn>Proceed to Checkout</Btn>
          </CartBtn>
        </CartRight>
      </CartScreen>
    </>
  )
}

export default CartPage
