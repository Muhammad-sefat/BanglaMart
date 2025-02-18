import React, { useEffect, useState } from "react";
import remove_icon from "../assets/cross_icon.png";
import Swal from "sweetalert2";

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

  const removeProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch("http://localhost:5000/removeproduct", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });

        await getData();

        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <p className="text-5xl font-medium text-center">All Product Here</p>
      <div className="overflow-x-auto">
        <table className="table w-full my-10">
          <thead className="text-base font-medium">
            <tr className="border-b border-gray-200 mb-6">
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
                <tr key={id} className="border-b border-gray-200">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            className="rounded"
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
                      onClick={() => {
                        removeProduct(item.id);
                      }}
                      className="mx-auto bg-gray-400 p-1 rounded-xl"
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
