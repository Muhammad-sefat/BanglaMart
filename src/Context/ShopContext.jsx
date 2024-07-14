import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const shopContext = createContext(null);
const getDefaultItems = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultItems);

  useEffect(() => {
    fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => setAll_product(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:5000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.error("Error:", error));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:5000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }
  };

  const CartFromRemove = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 1) - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:5000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }
    Swal.fire("Product Removed Successfully!");
  };

  const getTotalCartItem = () => {
    let totalNumber = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const cartInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalNumber += cartInfo.new_price * cartItems[item];
      }
    }
    return totalNumber;
  };

  const getTotalNumber = () => {
    let number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        number += cartItems[item];
      }
    }
    return number;
  };
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    CartFromRemove,
    getTotalCartItem,
    getTotalNumber,
  };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
