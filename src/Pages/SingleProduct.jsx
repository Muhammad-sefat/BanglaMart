import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
const SingleProduct = ({ product }) => {
  return (
    <div className="flex gap-5">
      <div className="flex gap-5 md:w-[50%]">
        <div>
          <img
            className="w-[100px] h-[110px] rounded"
            src={product.image}
            alt=""
          />
          <img
            className="w-[100px] h-[110px] rounded mt-3"
            src={product.image}
            alt=""
          />
          <img
            className="w-[100px] h-[110px] rounded mt-3"
            src={product.image}
            alt=""
          />
          <img
            className="w-[100px] h-[110px] rounded mt-3 mb-5"
            src={product.image}
            alt=""
          />
        </div>
        <div>
          <img className="w-full h-[96%] rounded" src={product.image} alt="" />
        </div>
      </div>
      <div className="md:w-[50%]">
        <h1>{product.name}</h1>

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
            {product.old_price}
          </p>
          <p className="text-xl font-medium text-red-500">
            {product.new_price}
          </p>
        </div>
        <p className="font-medium my-5">
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
        <button className="btn bg-red-500 rounded my-5 text-white">
          Add To Cart
        </button>
        <p>
          <span className="font-medium">Category :</span> Women , T-Shirt , Crop
          Top
        </p>
        <p>
          <span className="font-medium">Tags :</span> Latest , Modren
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
