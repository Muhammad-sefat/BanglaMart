import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import banner_mens from "./assets/banner_mens.png";
import banner_women from "./assets/banner_women.png";
import banner_kids from "./assets/banner_kids.png";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: "/mens",
        element: <ShopCategory banner={banner_mens} category="men" />,
      },
      {
        path: "/womens",
        element: <ShopCategory banner={banner_women} category="women" />,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={banner_kids} category="kid" />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
