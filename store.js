import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSliice";
import restaurantSlice from "./slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});
