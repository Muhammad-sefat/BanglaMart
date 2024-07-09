import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import SingleItem from "./SingleItem";

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);
  return (
    <div className="mb-6">
      <img src={props.banner} alt="" />
      <div className="flex items-center justify-between my-6">
        <p className="font-semibold">Showing 1-12 Out of 36 Products</p>
        <div className="py-2 px-6 border rounded-lg flex items-center gap-2">
          <p> Sort By</p> <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {all_product.map((item, id) => {
          if (props.category === item.category) {
            return (
              <SingleItem
                key={id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
      <button className="btn text-base font-medium bg-red-500 text-white my-5">
        Explore More
      </button>
    </div>
  );
};

export default ShopCategory;
