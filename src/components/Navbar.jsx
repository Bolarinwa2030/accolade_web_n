import React, { useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const phone = "2348146055407";
  const message = "Hello I'm interested in your Solar Installation Service";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 ">
      <img src={assets.Logo_Correct} className="w-38 sm:w-40" alt="Logo" />

      <div
        className={`text-gray-700 sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        {/* <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">
          Contact Us
        </a> */}
      </div>
      <a
        href={whatsappLink}
        className="text-sm  flex items-center gap-2 bg-[#008000] text-white px-6 py-2 pl-3 rounded-full cursor-pointer hover:scale-105 transition-all"
      >
        WhatsApp
        <img src={assets.WhatsApp} width={20} alt="icon" />
      </a>
      <a
        href="#contact-us"
        className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
      >
        Contact Us
        <img src={assets.arrow_icon} width={14} alt="Arrow" />
      </a>
    </div>
  );
};

export default Navbar;
