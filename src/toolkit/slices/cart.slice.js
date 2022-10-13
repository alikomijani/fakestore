import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const payload = action.payload;
      const index = state.findIndex((p) => p.id === payload.id);
      if (index !== -1) {
        state[index].count += 1;
      } else {
        state.push({ ...payload, count: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
    },
    decreaseItemFromCart: (state, action) => {
      const payload = action.payload;
      const item = state.find((p) => p.id === payload.id);
      const index = state.findIndex((p) => p.id === payload.id);
      if (item.count > 1) {
        state[index].count -= 1;
      } else {
        state.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.splice(0);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  decreaseItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
