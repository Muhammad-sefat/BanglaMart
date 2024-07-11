import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const shopContext = createContext(null);
const getDefaultItems = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const CartFromRemove = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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
