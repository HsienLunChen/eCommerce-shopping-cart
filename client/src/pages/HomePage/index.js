import React from 'react'
import {
  HomeScreen,
  HomeTitle,
  HomeProducts
} from './HomeElements'

import Product from '../../components/Product'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts as listProducts } from '../../redux/actions/productActions';

const HomePage = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error }  = getProducts;

  useEffect(() => {
    dispatch((listProducts()));
  }, [dispatch]);


  return (
    <>
      <HomeScreen>
        <HomeTitle>
          Latest Guitars
        </HomeTitle>

        <HomeProducts>
          {loading ? (<h2>Loading</h2>) : error ? (<h2>{error}</h2>) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                desc={product.description}
                price={product.price}
                img={product.img}
                productId={product._id}
              />
            ))
          )}
        </HomeProducts>
      </HomeScreen>
    </>
  )
}

export default HomePage
