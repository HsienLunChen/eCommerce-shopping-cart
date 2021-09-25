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

const CartItem = ({item, qtyChangeHandler, removeFromCartHandler}) => {
  console.log("item: " ,item)
  return (
    <>
      <CartWrapper>
        <CartImgWrapper>
          <CartImg src={item.img} />
        </CartImgWrapper>
        <ItemLink to={`/product/${item.product}`}>
          <LinkName>
            {item.name}
          </LinkName>
        </ItemLink>
        <ItemP>
          ${item.price}
        </ItemP>

        <ItemSelect
          value={item.qty}
          onChange={(e) => (
            qtyChangeHandler(item.product, e.target.value)
          )}
        >
          {[...Array(item.countInStock).keys()].map((x) => (
          <ItemOption key={x + 1} value={x + 1}>
            {x + 1}
          </ItemOption>
        ))}
        </ItemSelect>

        <ItemBtn onClick={() => {
          removeFromCartHandler(item.product)
        }}>
          <ItemIcon>
            X
          </ItemIcon>
        </ItemBtn>
      </CartWrapper>
    </>
  )
}

export default CartItem
