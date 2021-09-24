import React from 'react'
import {
  ProductContainer,
  ProductImg,
  ProductInfo,
  ProductName,
  ProductDesc,
  ProductPrice,
  InfoBtn
} from './ProductElements'

const Product = ( {
  name,
  desc,
  price,
  img,
  productId
}) => {
  return (
    <>
      <ProductContainer>
        <ProductImg src={img}>
        </ProductImg>

        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductDesc>{desc}</ProductDesc>
          <ProductPrice>{price}</ProductPrice>
          <InfoBtn to={`/product/${productId}`}>View</InfoBtn>
        </ProductInfo>
      </ProductContainer>
    </>
  )
}

export default Product
