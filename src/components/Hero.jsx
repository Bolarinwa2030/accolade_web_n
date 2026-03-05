import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-15 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <div className="flex flex-col item-center gap-2 p-1.5 pr-4 rounded-full">
        <p className="text-lg font-medium">
          🔋 Smart Solar Systems - ⚡ Certified Electrical Services - 🏠
          Residential & Commercial Projects
        </p>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
        Powering Your Future with Clean, Reliable Energy
      </h1>

      <div className="relative">
        <img
          src={assets.Hero_Img}
          alt=""
          className="w-500 h-150 max-w-4xl rounded"
        />
      </div>
      <p className="text-sm sm:text-lg font-medium text-gray-500 w-full pb-3">
        At{" "}
        <span className="inline-flex items-center gap-2 w-35">
          {" "}
          <img src={assets.Logo_Correct} alt="" />{" "}
        </span>
        , we help homeowners and businesses take control of their energy with
        high-quality solar installations and professional electrical services.
        Lower your costs. Increase efficiency. Power your property the smarter
        way.
      </p>
    </div>
  );
};

export default Hero;
