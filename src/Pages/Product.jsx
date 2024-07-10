import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "./Breadcrum";
import SingleProduct from "./SingleProduct";
import Description from "./Description";

const Product = () => {
  const { all_product } = useContext(shopContext);
  const { id } = useParams();
  const product = all_product.find((e) => e.id === Number(id));
  console.log(product);
  return (
    <div>
      <Breadcrum product={product} />
      <SingleProduct product={product} />
      <Description />
    </div>
  );
};

export default Product;
