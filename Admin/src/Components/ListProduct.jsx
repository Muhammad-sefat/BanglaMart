import React, { useEffect, useState } from "react";
import remove_icon from "../assets/cross_icon.png";

const ListProduct = () => {
  const [listProduct, setListProduct] = useState([]);
  console.log(listProduct);
  const getData = async () => {
    await fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setListProduct(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p className="text-5xl font-medium text-center">All Product Here</p>
      <div className="overflow-x-auto">
        <table className="table w-full my-10">
          <thead className="text-base font-medium mb-6">
            <tr className="border-b border-gray-200 my-6">
              <th>Product</th>
              <th>Title</th>
              <th>Old_Price</th>
              <th>New_Price</th>
              <th>Category</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="pt-6">
            {listProduct.map((item, id) => {
              return (
                <tr key={id} className="border-b border-gray-200 pt-3">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium py-2 px-4">{item.name}</td>
                  <td className="text-center">{item.old_price}</td>
                  <td className="text-center">{item.new_price}</td>
                  <td className="text-center">{item.category}</td>
                  <td>
                    <img
                      className="mx-auto rounded"
                      src={remove_icon}
                      alt="Remove"
                    />
                  </td>
                </tr>
              );
            })}
            <hr />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
