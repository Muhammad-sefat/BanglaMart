import data_product from "../assets/data.js";
import SingleItem from "./SingleItem.jsx";

const Popular = () => {
  return (
    <div className="my-10">
      <h2 className="text-3xl md:text-6xl font-semibold my-5 text-center">
        POPULAR IN WOMEN
      </h2>
      <hr className="w-[300px] h-2 bg-black rounded mx-auto" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {data_product.map((item, id) => {
          return (
            <SingleItem
              key={id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
