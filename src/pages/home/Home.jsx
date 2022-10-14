import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import CardList from "../../components/card_list/CardList";
import Container from "../../components/container/Container";
import "./home.style.scss";
// import { CartContext } from "../../context/cart/CartProvider";
import { addItemToCart } from "../../toolkit/slices/cart.slice";
import { useDispatch } from "react-redux";
import axios from "../../api/axios";
const Home = () => {
  // const { dispatch } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      setCategories(res.data.categories);
    });
    axios.get("/api/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <Container>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.title}</li>
          ))}
        </ul>
        <CardList className="mt-1" title={"دسته بندی اول"} href="/categories/1">
          {products.map((item, index) => (
            <Card
              key={index}
              {...item}
              onClick={() => dispatch(addItemToCart(item))}
            />
          ))}
        </CardList>
        <CardList className="mt-1" title={"دسته بندی دوم"} href="/categories/2">
          {products.map((item, index) => (
            <Card
              key={index}
              {...item}
              onClick={() => dispatch(addItemToCart(item))}
            />
          ))}
        </CardList>
        <CardList className="mt-1" title={"دسته بندی سوم"} href="/categories/3">
          {products.map((item, index) => (
            <Card
              key={index}
              {...item}
              onClick={() => dispatch(addItemToCart(item))}
            />
          ))}
        </CardList>
      </Container>
    </div>
  );
};

export default Home;
