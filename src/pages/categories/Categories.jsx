import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import Container from "../../components/container/Container";
import "./categories.style.scss";
import { products } from "../../db";
// import { CartContext } from "../../context/cart/CartProvider";
// import { cartActions } from "../../context/cart/cart.reducer";
import { addItemToCart } from "../../toolkit/slices/cart.slice";
import { useDispatch } from "react-redux";
const Categories = () => {
  const { categoryID } = useParams();
  const [categories, setCategories] = useState([
    { id: 1, title: "موبایل" },
    { id: 2, title: "لپ تاپ" },
    { id: 3, title: "تلویزیون" },
    { id: 4, title: "بازی" },
    { id: 5, title: "لوازم جانبی" },
  ]);
  const [productList, setProductList] = useState(products);
  // const { dispatch } = useContext(CartContext);
  const dispatch = useDispatch();
  return (
    <div className="Categories">
      <Container>
        <div className="Categories__content">
          <ul className="categories__list">
            {categories.map((item) => (
              <li key={item.id}>
                <Link to={`/categories/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="product">
            <h1>
              {
                categories.find((item) => item.id.toString() === categoryID)
                  .title
              }
            </h1>
            <div className="product__list">
              {productList.map((p, index) => (
                <Card
                  key={index}
                  {...p}
                  onClick={() => dispatch(addItemToCart(p))}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
