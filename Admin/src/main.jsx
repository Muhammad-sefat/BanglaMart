import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./Components/AddProduct.jsx";
import ListProduct from "./Components/ListProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/listproduct",
        element: <ListProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
