import * as actionTypes from '../constants/cartContants';

const CART_INITIAL_STATE = {
  cartItems: []
}

export const cartReducer = (state=CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newItem = action.payload;
      const existItem = state.cartItems.find((item) => item.product === newItem.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existItem.product ? newItem : item
          )
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem]
        }
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.product !== action.payload)
      }
    default:
      return state;
  }
}