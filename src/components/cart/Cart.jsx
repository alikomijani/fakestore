import React, { useContext, useEffect } from "react";
import "./cart.style.scss";
import Button from "../button/Button";
import IconButton from "../icon_button/IconButton";
// import { cartActions } from "../../context/cart/cart.reducer";
import clsx from "clsx";
// import { CartContext } from "../../context/cart/CartProvider";
import {
  addItemToCart,
  decreaseItemFromCart,
} from "../../toolkit/slices/cart.slice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Cart = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // const { dispatch, cartItems } = useContext(CartContext);
  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [handleClose]);
  const totalCount = cartItems.reduce((prev, p) => prev + p.count, 0);
  const totalPrice = cartItems.reduce((prev, p) => prev + p.price * p.count, 0);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={clsx("Cart", !open && "Cart--hidden")}
    >
      <header>
        <p>{`${totalCount} کالا`}</p>
        <Link to="/cart">مشاهده سبد خرید</Link>
      </header>
      <div>
        {cartItems.length ? (
          <ul>
            {cartItems.map((p) => (
              <li key={p.id}>
                <img src={p.image} alt="" />
                <div>{p.name}</div>
                <div className="Cart__controller">
                  <IconButton onClick={() => dispatch(addItemToCart(p))}>
                    {"+"}
                  </IconButton>
                  {p.count}
                  <IconButton onClick={() => dispatch(decreaseItemFromCart(p))}>
                    {"-"}
                  </IconButton>
                </div>
                <div>{p.price * p.count} تومان</div>
              </li>
            ))}
          </ul>
        ) : (
          <h2>{"سبد خرید شما خالی است"}</h2>
        )}

        <footer>
          <div>
            <p>{"مبلغ قابل پرداخت"}</p>
            <p>
              {totalPrice} {"تومان"}
            </p>
          </div>
          <div>
            <Button>{"ثبت سفارش"}</Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Cart;
