import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-6 py-12 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full text-gray-700"
    >
      {/* Top Info */}
      <div className="flex flex-col items-center gap-2 p-2 rounded-full">
        <p className="text-sm sm:text-lg font-medium">
          🔋 Smart Solar Systems - ⚡ Certified Electrical Services - 🏠
          Residential & Commercial Projects
        </p>
      </div>

      {/* Main Hero Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[84px] font-medium leading-tight xl:leading-[95px] max-w-5xl">
        Powering Your Future with Clean, Reliable Energy
      </h1>

      {/* Hero Image */}
      <div className="relative w-full flex justify-center">
        <img
          src={assets.Hero_Img}
          alt="Solar Energy Hero"
          className="w-full max-w-4xl h-auto rounded"
        />
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500 max-w-3xl pt-3">
        At{" "}
        <span className="inline-flex items-center gap-2">
          <img src={assets.Logo_Correct} alt="Logo" className="w-10 h-10" />
        </span>
        , we help homeowners and businesses take control of their energy with
        high-quality solar installations and professional electrical services.
        Lower your costs. Increase efficiency. Power your property the smarter
        way.
      </p>
    </section>
  );
};

export default Hero;