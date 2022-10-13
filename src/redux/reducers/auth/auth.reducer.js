import { authActions } from "./auth.actions";

const initialState = {
  isLogin: false,
  token: "",
  firstName: "",
  lastName: "",
  username: "",
};

function authReducer(state = { ...initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case authActions.LOGIN:
      return {
        isLogin: true,
        token: payload.token,
        firstName: payload.firstName,
        lastName: payload.lastName,
        username: payload.username,
      };
    case authActions.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

export default authReducer;
