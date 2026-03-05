import React from "react";
import assets from "../assets/assets";

const WhoWeAre = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={assets.Skilled_Img}
              alt="Electrical team working"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <p className="text-lg font-semibold tracking-widest text-gray-500 uppercase">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#FA8128] leading-tight">
              Providing High-Quality Electrical Solutions
            </h2>

            <p className="mt-5 text-lg text-gray-700 font-medium">
              💡 Operating globally across various electrical sectors with
              precision and reliability.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With years of experience delivering solutions to large-scale
              enterprises worldwide, we provide end-to-end electrical services
              tailored to meet the specific demands of each industry we serve.
            </p>

            {/* Feature List */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FA8128] rounded-full"></span>
                <span className="text-gray-700">
                  All solutions are thoroughly tested
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FA8128] rounded-full"></span>
                <span className="text-gray-700">
                  Leverage years of industry expertise
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FA8128] rounded-full"></span>
                <span className="text-gray-700">
                  Proven, best-in-class service delivery
                </span>
              </li>
            </ul>

            {/* CTA Button (Optional but Recommended) */}
            {/* <div className="mt-8">
          <button className="bg-[#FA8128] hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-md transition duration-300">
            Learn More
          </button>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
