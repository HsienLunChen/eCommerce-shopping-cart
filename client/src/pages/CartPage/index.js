import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addToCart, removeFromCart } from '../../redux/actions/cartAction'

import { Link } from 'react-router-dom'

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

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
      <CartScreen>
        <CartLeft>
          <CartTitle>Shopping Cart</CartTitle>
          {cartItems.length === 0 ? (
            <div>
              Cart is Empty <Link to="/">Go back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeFromCartHandler={removeFromCartHandler}
              />
            ))
          )}

        </CartLeft>
        <CartRight>
          <CartInfo>
            <CartP>Subtotal: {getCartCount()}items</CartP>
            <CartP>${getCartSubTotal()}</CartP>
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
