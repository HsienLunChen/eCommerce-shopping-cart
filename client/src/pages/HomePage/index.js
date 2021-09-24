import React from 'react'
import {
  HomeScreen,
  HomeTitle,
  HomeProducts
} from './HomeElements'

import Product from '../../components/Product'

const HomePage = () => {
  return (
    <>
      <HomeScreen>
        <HomeTitle>
          Latest Guitars
        </HomeTitle>

        <HomeProducts>
          <Product
            name='product 1'
            desc='this is product 1'
            price='45'
            img="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
            productId='1'
          />
          <Product
            name='product 1'
            desc='this is product 1'
            price='45'
            img="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
            productId='1'
          />
          <Product
            name='product 1'
            desc='this is product 1'
            price='45'
            img="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
            productId='1'
          />
          <Product
            name='product 1'
            desc='this is product 1'
            price='45'
            img="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
            productId='1'
          />
          <Product
            name='product 1'
            desc='this is product 1'
            price='45'
            img="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
            productId='1'
          />
        </HomeProducts>
      </HomeScreen>
    </>
  )
}

export default HomePage
