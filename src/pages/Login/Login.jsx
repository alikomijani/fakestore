import React from "react";
import Button from "../../components/button/Button";
import { fakeLogin } from "../../db";
// import { authActions } from "../../context/auth/auth.reducer";
import "./login.style.scss";
// import { AuthContext } from "../../context/auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, loginUserAsync } from "../../toolkit/slices/auth.slice";
const Login = () => {
  // const { authDispatch, auth } = useContext(AuthContext);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    dispatch(loginUserAsync(data));
  };
  if (isLogin) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="Login">
      <div className="Login__container">
        <form onSubmit={handleSubmit}>
          {error && <div className="Login_error">{error}</div>}
          <div>
            <label htmlFor="username">نام کاربری:</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">کلمه عبور:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <Button className="Login__submit" type="submit">
              {loading ? "..loading" : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
