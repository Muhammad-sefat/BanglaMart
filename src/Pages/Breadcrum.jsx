import arrow_icon from "../assets/breadcrum_arrow.png";
const Breadcrum = ({ product }) => {
  return (
    <div>
      <p className="flex space-x-3 my-5 font-medium">
        {" "}
        HOME <img className="px-2" src={arrow_icon} alt="" /> SHOP{" "}
        <img className="px-2" src={arrow_icon} alt="" /> {product.category}{" "}
        <img className="px-2" src={arrow_icon} alt="" /> {product.name}{" "}
        <img className="px-2" src={arrow_icon} alt="" />
      </p>
    </div>
  );
};

export default Breadcrum;
