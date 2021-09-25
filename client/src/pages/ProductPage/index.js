import React from 'react'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProductDetail } from '../../redux/actions/productActions'
import { addToCart } from '../../redux/actions/cartAction'

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

const ProductPage = ({match, history}) => {
  const [qty, setQty] = useState(1);
   const dispatch = useDispatch();
   const productDetail = useSelector((state) => state.getProductDetail);

   const {loading, error, product} = productDetail;

   useEffect(() => {
     console.log("here")
     console.log(match.params.id)
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetail(match.params.id));
    }
   }, [dispatch, match, product]);

   const addCartHandler = () => {
     dispatch(addToCart(product._id, qty));
     history.push("/cart");
   }

  return (
    <>
      <ProductScreen>
        {loading ? (<h2>Loading</h2>) : error ? (<h2>{error}</h2>) :
        <>
          <ScreenLeft>
            <ScreenLeftImg>
              <LeftImg src={product.img} alt={product.name}/>
            </ScreenLeftImg>

            <ScreenLeftInfo>
              <LeftName>{product.name}</LeftName>
              <LeftP>Price: ${product.price}</LeftP>
              <LeftP>Descriptions: {product.description}</LeftP>
            </ScreenLeftInfo>
          </ScreenLeft>

          <ScreenRight>
            <RightInfo>
              <RightP>Total Price: ${parseInt(product.price)*qty}</RightP>
              <RightP>Status: {
                  product.countInStock > 0 ? "In Stock" : "Out of Stock"
                }</RightP>
              <RightP>
                Qty:
                <RightSelect
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <RightOption key={x + 1} value={x + 1}>
                      {x + 1}
                    </RightOption>
                  ))}
                </RightSelect>
              </RightP>
              <RightBtn type="button" onClick={addCartHandler}>Add to Cart</RightBtn>
            </RightInfo>
          </ScreenRight>
        </>
        }

      </ProductScreen>
    </>
  )
}

export default ProductPage
