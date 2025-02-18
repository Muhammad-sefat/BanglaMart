import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
const SingleProduct = ({ product }) => {
  const { addToCart } = useContext(shopContext);
  return (
    <div className="p-3 lg:flex gap-5 mt-8">
      <div className="flex  gap-5 lg:w-[50%] p-5">
        <div>
          <img
            className="w-[100px] h-[110px] rounded hover:scale-105"
            src={product?.image}
            alt=""
          />
          <img
            className="w-[100px] h-[110px] rounded mt-3 hover:scale-105"
            src={product?.image}
            alt=""
          />
          <img
            className="w-[100px] h-[110px] rounded mt-3 hover:scale-105"
            src={product?.image}
            alt=""
          />
          <img
            className="w-[100px] h-[110px] rounded mt-3 mb-5 hover:scale-105"
            src={product?.image}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[96%] rounded hover:scale-110"
            src={product?.image}
            alt=""
          />
        </div>
      </div>
      <div className="p-5 lg:w-[50%]">
        <h1 className="text-left text-2xl font-medium mb-4">{product?.name}</h1>

        <div className="flex gap-2 items-center">
          <div className="flex">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          </div>
          <p>(122)</p>
        </div>
        <div className="flex gap-6 my-5">
          <p className="text-xl font-medium line-through text-gray-400">
            {product?.old_price}
          </p>
          <p className="text-xl font-medium text-red-500">
            {product?.new_price}
          </p>
        </div>
        <p className="font-medium my-5 text-left">
          Originally designed for pilots, bomber jackets are known for their
          fitted waist and cuffs, and a comfortable, casual style. They often
          have a zippered front and can be made from materials like leather,
          nylon, or polyester.
        </p>
        <p className="text-left text-xl font-medium my-4">Select Size</p>
        <div className="flex gap-2 items-center my-3">
          <p className="py-1 px-3 rounded bg-gray-200 font-medium">S</p>
          <p className="py-1 px-3 rounded bg-gray-200 font-medium">M</p>
          <p className="py-1 px-3 rounded bg-gray-200 font-medium">L</p>
          <p className="py-1 px-3 rounded bg-gray-200 font-medium">XL</p>
          <p className="py-1 px-3 rounded bg-gray-200 font-medium">XXL</p>
        </div>
        <div className="text-left">
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="btn bg-red-500 rounded my-5 text-white font-medium"
          >
            Add To Cart
          </button>
        </div>
        <p className="text-left">
          <span className="font-medium">Category :</span> Women , T-Shirt , Crop
          Top
        </p>
        <p className="text-left">
          <span className="font-medium">Tags :</span> Latest , Modren
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
