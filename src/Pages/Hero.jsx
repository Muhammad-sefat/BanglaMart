import React from "react";
import hero_icon from "../assets/hero_image.png";
import hand_icon from "../assets/hand_icon.png";

import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-gradient-to-r from-purple-200 to-pink-200 rounded min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hero_icon} className="lg:w-[40%]" />
          <div className="lg:w-[50%] text-left">
            <h1 className="text-xl font-bold">New Arrivals Here!</h1>
            <div className="text-5xl font-bold my-5 space-y-3">
              <div className="flex items-center gap-2">
                <p>New</p>
                <img className="w-[15%]" src={hand_icon} alt="" />
              </div>
              <p>Collections</p>
              <p>For Everyone</p>
            </div>
            <button className="btn bg-red-500 font-semibold border-0 text-white">
              Latest Collection Only <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
