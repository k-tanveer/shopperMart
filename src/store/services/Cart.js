import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const Cart = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },

    removeItem(state, action) {
      const filtered = state.items.filter(item => item.id !== action.payload);
      state.items = filtered;
    },

    clearCart(state, action) {
      return {
        ...state,
        items: [],
      };
    },
  },
});

export const {addToCart, removeItem, clearCart} = Cart.actions;

export default Cart.reducer;
