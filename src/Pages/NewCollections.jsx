import SingleItem from "./SingleItem";
import { useEffect, useState } from "react";

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newcollection")
      .then((res) => res.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="p-3 text-3xl md:text-6xl font-semibold my-5 text-center">
        NEW COLLECTIONS
      </h2>
      <hr className="w-[300px] h-2 bg-black rounded mx-auto" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {new_collection.map((item, id) => {
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

export default NewCollections;
