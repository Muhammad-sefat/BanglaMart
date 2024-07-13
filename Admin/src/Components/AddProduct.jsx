import React from "react";
import upload_area from "../assets/upload_area.svg";

const AddProduct = () => {
  return (
    <div className="">
      <form action="" className="bg-gray-200 w-[70%] p-8 rounded-md">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-left">
          <div className="col-span-full">
            <label htmlFor="address" className="text-lg">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder=""
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-lg">
              First name
            </label>
            <input
              id="firstname"
              type="text"
              placeholder="First name"
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-lg">
              Last name
            </label>
            <input
              id="lastname"
              type="text"
              placeholder="Last name"
              className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="text-lg" htmlFor="">
              Product Category
            </label>
            <select
              name=""
              id=""
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
            <img src={upload_area} alt="" />
          </label>
          <input type="file" name="image" id="file-input" hidden />
          <div className="text-left">
            <button className=" py-2 px-6 rounded-md bg-red-500 text-white my-2 font-medium">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
