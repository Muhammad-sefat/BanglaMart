import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import ShopContextProvider from "./Context/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="p-5 md:px-6 mx-auto">
    <React.StrictMode>
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </React.StrictMode>
  </div>
);
