import React, { useRef, useState } from "react";
import upload_area from "../assets/upload_area.svg";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [image, setImage] = useState();
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const formRef = useRef(null);

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const addButton = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    const formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      await fetch("http://localhost:5000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            if (data.success) {
              Swal.fire({
                title: "Successfull!",
                text: "Your Product Save Successfully",
                icon: "success",
              });
              // Reset form and state
              setProductDetails({
                name: "",
                image: "",
                category: "women",
                new_price: "",
                old_price: "",
              });
              setImage(null);
              formRef.current.reset();
            }
          } catch (error) {
            console.error(error.message);
          }
          form.reset();
        });
    }
  };

  return (
    <div className="">
      <form action="" className="bg-gray-200 w-[70%] p-8 rounded-md">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-left">
          <div className="col-span-full">
            <label htmlFor="name" className="text-lg">
              Product Title
            </label>
            <input
              name="name"
              value={productDetails.name}
              onChange={changeHandler}
              id="name"
              type="text"
              placeholder="Product Title"
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="old_price" className="text-lg">
              Price
            </label>
            <input
              name="old_price"
              value={productDetails.old_price}
              onChange={changeHandler}
              id="old_price"
              type="number"
              placeholder="Old Price"
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="new_price" className="text-lg">
              Offer Price
            </label>
            <input
              name="new_price"
              value={productDetails.new_price}
              onChange={changeHandler}
              id="new_price"
              type="number"
              placeholder="New Price"
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="text-lg" htmlFor="category">
              Product Category
            </label>
            <select
              name="category"
              value={productDetails.category}
              onChange={changeHandler}
              id="category"
              className="py-2 px-5 my-2 rounded-md outline-none"
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kid</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt=""
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
          <div className="text-left">
            <button
              type="button"
              onClick={addButton}
              className="py-2 px-6 rounded-md bg-red-500 text-white my-2 font-medium"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
