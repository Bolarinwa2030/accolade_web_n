import React from "react";
import assets from "../assets/assets";
import Title from "./Title";

const Service = () => {
  const ourService = [
    {
      title: "Solar Installation",
      description:
        "Professional solar panel installation designed to lower your energy bills and increase efficiency. We deliver safe, reliable, and high-performance systems built to power your future.",
      image: assets.service_img_1,
    },
    {
      title: "Electrical Work",
      description:
        "Expert wiring, panel upgrades, lighting installations, and troubleshooting services delivered with precision and safety you can trust.",
      image: assets.service_img_4,
    },
    {
      title: "Sales of Solar Accessories",
      description:
        "High-quality solar accessories including inverters, batteries, charge controllers, and mounting systems. Reliable products designed to maximize your system’s performance.",
      image: assets.service_img_3,
    },
    {
      title: "Sales of Solar Accessories",
      description:
        "High-quality solar accessories including inverters, batteries, charge controllers, and mounting systems. Reliable products designed to maximize your system’s performance.",
      image: assets.service_img_3,
    },
    {
      title: "Sales of Solar Accessories",
      description:
        "High-quality solar accessories including inverters, batteries, charge controllers, and mounting systems. Reliable products designed to maximize your system’s performance.",
      image: assets.service_img_3,
    },
    {
      title: "Solar Installation",
      description:
        "Professional solar panel installation designed to lower your energy bills and increase efficiency. We deliver safe, reliable, and high-performance systems built to power your future.",
      image: assets.service_img_1,
    },
  ];
  return (
    <div
      id="services"
      className="flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 bg-gradient-to-b from-[#FFF5E1] to-[#FDE3B9]"
    >
      {/* Section Title */}
      <Title
        title="Our Service"
        descr="Providing reliable solar and electrical solutions for homes and businesses"
      />

      <div className="w-full max-w-6xl p-8 rounded-3xl bg-gradient-to-b from-[#FFF5E1] to-[#FDE3B9]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {ourService.map((work, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-100 object-cover rounded-xl"
              />
              <h3 className="mt-4 mb-2 text-lg font-bold text-gray-800">
                {work.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-700 leading-relaxed">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
