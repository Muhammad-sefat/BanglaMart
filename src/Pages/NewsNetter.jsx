const NewsNetter = () => {
  return (
    <div className="my-8">
      <div className="p-3 flex items-center justify-center bg-gradient-to-b from-purple-200 to-gray-100 rounded md:h-[60vh]  md:w-[90%] mx-auto">
        <div>
          <h2 className="text-2xl md:text-5xl font-medium">
            Get Exclusive Offers on Your Email!
          </h2>
          <p className="font-semibold my-3">
            Subscribe to our newsletter and stay update
          </p>
          <input
            className="py-3 px-16 rounded-lg outline-0"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="btn bg-red-500 text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsNetter;
