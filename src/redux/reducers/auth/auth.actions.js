export const authActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const loginUser = (authData) => {
  return {
    type: authActions.LOGIN,
    payload: authData,
  };
};

export const userLogout = () => {
  return {
    type: authActions.LOGOUT,
  };
};
