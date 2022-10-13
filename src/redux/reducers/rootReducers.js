import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
