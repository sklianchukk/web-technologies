import {UPDATE_CART_ITEM_COUNT, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_CART} from "./actionTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {...state, cartItems: action.payload};

    case ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.selectedColor === action.payload.selectedColor &&
          item.selectedYear === action.payload.selectedYear
      );

      let updatedCartItems;
      if (existingItemIndex >= 0) {

        updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].count += action.payload.count;
      } else {

        updatedCartItems = [...state.cartItems, action.payload];
      }
      return {...state, cartItems: updatedCartItems};

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) =>
            !(item.id === action.payload.id &&
              item.selectedColor === action.payload.selectedColor &&
              item.selectedYear === action.payload.selectedYear)
        ),
      };

    case CLEAR_CART:
      return {...state, cartItems: []};


    case UPDATE_CART_ITEM_COUNT: {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id &&
        item.selectedYear === action.payload.selectedYear &&
        item.selectedColor === action.payload.selectedColor
          ? {...item, count: action.payload.newCount}
          : item
      );

      return {...state, cartItems: updatedCartItems};
    }

    default:
      return state;
  }
};

export default cartReducer