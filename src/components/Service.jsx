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
      image: assets.Electrical_Img,
    },
    {
      title: "Sales of Solar Accessories",
      description:
        "High-quality solar accessories including inverters, batteries, charge controllers, and mounting systems. Reliable products designed to maximize your system’s performance.",
      image: assets.service_img_3,
    },
    {
      title: "CCTV Installation",
      description:
        "Protect what matters most with our professional CCTV installation solutions. We provide end-to-end surveillance systems for homes, businesses, and commercial properties — designed to give you complete peace of mind, 24/7.",
      image: assets.cctv_installation,
    },
    {
      title: "Sales of CCTV Accessories",
      description:
        "Complete your surveillance system with our wide range of high-quality CCTV accessories. Whether you're setting up a brand-new system or upgrading an existing one, we stock everything you need to keep your cameras running at their best",
      image: assets.cctv_accessorires,
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
