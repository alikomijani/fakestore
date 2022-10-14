import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import Categories from "../pages/categories/Categories";
import Cart from "../pages/cart/Cart";
import Layout from "../components/layout";
import Login from "../pages/Login/Login";
import Profile from "../pages/profile/Profile";
import ProductSingle from "../pages/ProductSingle/ProductSingle";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "categories/:categoryID",
        element: <Categories />,
      },
      {
        path: "product/:id",
        element: <ProductSingle />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
