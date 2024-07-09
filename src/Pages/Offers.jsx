import image from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="py-10">
      <div className="hero bg-gradient-to-b from-purple-200 to-gray-100 rounded h-[80vh]  w-[90%] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img src={image} className="md:w-[35%]" />
          <div className="md:w-[55%] text-left">
            <h1 className="text-6xl font-bold">
              Exclusive <br />
              Offer For You
            </h1>
            <p className="uppercase my-3 font-semibold">
              Only on best seller product
            </p>
            <button className="btn bg-red-500 font-semibold border-0 text-white mt-4">
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
