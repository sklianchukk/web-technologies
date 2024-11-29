import {ADD_TO_CART, CLEAR_CART, SET_CART} from './actionTypes';

const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

export const loadCartFromLocalStorage = () => {
  return (dispatch) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch({type: SET_CART, payload: savedCart});
  };
};

export const addToCart = (item) => {
  return (dispatch, getState) => {
    const {cartItems} = getState().cart;

    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedColor === item.selectedColor &&
        cartItem.selectedYear === item.selectedYear
    );

    if (existingItemIndex > -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].count += item.count;
      dispatch({type: SET_CART, payload: updatedCartItems});
    } else {
      dispatch({type: ADD_TO_CART, payload: item});
    }

    saveCartToLocalStorage(getState().cart.cartItems);
  };
};

export const removeFromCart = ({id, selectedColor, selectedYear}) => {
  return (dispatch, getState) => {
    const updatedCartItems = getState().cart.cartItems.filter(
      (item) => !(item.id === id && item.selectedColor === selectedColor && item.selectedYear === selectedYear)
    );

    dispatch({type: SET_CART, payload: updatedCartItems});
    saveCartToLocalStorage(updatedCartItems);
  };
};

export const updateCartItemCount = ({id, selectedColor, selectedYear, newCount}) => {
  return (dispatch, getState) => {
    const updatedCartItems = getState().cart.cartItems.map((item) =>
      item.id === id && item.selectedColor === selectedColor && item.selectedYear === selectedYear
        ? {...item, count: newCount}
        : item
    );

    const filteredCartItems = updatedCartItems.filter((item) => item.count > 0);

    dispatch({type: SET_CART, payload: filteredCartItems});
    saveCartToLocalStorage(filteredCartItems);
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({type: CLEAR_CART});
    localStorage.removeItem('cart');
  };
};
