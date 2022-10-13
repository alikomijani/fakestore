import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    firstName: "",
    lastName: "",
    token: "",
    username: "",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isLogin = true;
    },
    logout: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      state.username = "";
      state.isLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
