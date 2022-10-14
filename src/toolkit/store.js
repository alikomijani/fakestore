import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import cartSlice from "./slices/cart.slice";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "myApp",
  storage,
};
const rootReducer = combineReducers({
  cart: cartSlice,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

export default store;
