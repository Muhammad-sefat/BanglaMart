import React from "react";
import productcart from "../assets/Product_Cart.svg";
import productlist from "../assets/Product_list_icon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full md:max-w-64 bg-gray-100 pt-12 px-2 h-[100vh] space-y-5">
      <Link
        to={"/addproduct"}
        className="flex items-center justify-around rounded bg-white"
      >
        <img src={productcart} alt="" />
        <p className="my-3 font-medium">Product Cart</p>
      </Link>
      <Link
        to={"/listproduct"}
        className="flex items-center justify-around rounded bg-white"
      >
        <img src={productlist} alt="" />
        <p className="text-left my-3 font-medium">Product List</p>
      </Link>
    </div>
  );
};

export default Sidebar;
