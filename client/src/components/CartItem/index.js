import React from 'react'

import {
  CartWrapper,
  CartImgWrapper,
  CartImg,
  ItemLink,
  LinkName,
  ItemP,
  ItemSelect,
  ItemOption,
  ItemBtn,
  ItemIcon
} from './CartElements'

const CartItem = () => {
  return (
    <>
      <CartWrapper>
        <CartImgWrapper>
          <CartImg src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80">

          </CartImg>
        </CartImgWrapper>
        <ItemLink to='/product/1'>
          <LinkName>
            Product 1
          </LinkName>
        </ItemLink>
        <ItemP>
          $400
        </ItemP>

        <ItemSelect>
          <ItemOption>1</ItemOption>
        </ItemSelect>

        <ItemBtn>
          <ItemIcon>
            X
          </ItemIcon>
        </ItemBtn>
      </CartWrapper>
    </>
  )
}

export default CartItem
