import React from 'react'

import {
  ProductScreen,
  ScreenLeft,
  ScreenLeftImg,
  ScreenLeftInfo,
  LeftImg,
  LeftName,
  LeftP,
  ScreenRight,
  RightInfo,
  RightP,
  RightSelect,
  RightOption,
  RightBtn
} from './ProductPageElements'

const ProductPage = () => {
  return (
    <>
      <ProductScreen>
        <ScreenLeft>
          <ScreenLeftImg>
            <LeftImg src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"/>
          </ScreenLeftImg>

          <ScreenLeftInfo>
            <LeftName>Product 1</LeftName>
            <LeftP>Price: $409</LeftP>
            <LeftP>Desc: 400</LeftP>
          </ScreenLeftInfo>
        </ScreenLeft>

        <ScreenRight>
          <RightInfo>
            <RightP>Price: 40</RightP>
            <RightP>Status: open</RightP>
            <RightP>
              Qty:
              <RightSelect>
                <RightOption value="1">1</RightOption>
                <RightOption value="2">2</RightOption>
                <RightOption value="3">3</RightOption>
                <RightOption value="4">4</RightOption>
              </RightSelect>
            </RightP>
            <RightBtn type="button">Add to Cart</RightBtn>
          </RightInfo>
        </ScreenRight>
      </ProductScreen>
    </>
  )
}

export default ProductPage
