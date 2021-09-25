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
        <ProductImg src={img} alt={name}>
        </ProductImg>

        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductDesc>{desc.substring(0, 100)}</ProductDesc>
          <ProductPrice>${price}</ProductPrice>
          <InfoBtn to={`/product/${productId}`}>View</InfoBtn>
        </ProductInfo>
      </ProductContainer>
    </>
  )
}

export default Product
