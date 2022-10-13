import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";
import cartSlice from "./slices/cart.slice";
import logger from "redux-logger";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
  },
  middleware: [logger],
});

export default store;
