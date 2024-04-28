import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If the item doesn't exist in the cart, add it
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      const itemIndex = state.items.findIndex(
        (item) => item.id === itemIdToRemove
      );

      if (itemIndex !== -1) {
        // If the item is found in the cart
        const itemToRemove = state.items[itemIndex];
        if (itemToRemove.quantity > 1) {
          // If the item has a quantity greater than 1, decrement the quantity
          state.items[itemIndex].quantity -= 1;
        } else {
          // If the item has a quantity of 1, remove the item from the cart
          state.items.splice(itemIndex, 1);
        }
      }
    },

    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = (state, id) =>
  state.cart.items.filter((item) => item.id == id);

// export const selectCartTotal = (state) =>
//   state.cart.items.reduce((total, item) => (total = total + item.price), 0);

// export const selectCartTotal = (state) => state.cart.totalPrice;

export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

export default cartSlice.reducer;
