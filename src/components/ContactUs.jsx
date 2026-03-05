import React from "react";
import assets from "../assets/assets";
import Title from "./Title";

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl-px-40 pt-30 text-gray-700 bg-gradient-to-b from-[#FFF5E1] to-[#FDE3B9]"
    >
      <Title
        title="Reach Out to Us"
        descr="From Strategy to Execution, we craft best solution that move your business forward "
      />
      <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 ronded-lg border-gray-300 bg-[#FFFFFF]">
            <img src={assets.person_icon} alt="" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Email ID</p>
          <div className="flex pl-3 ronded-lg border-gray-300 bg-[#FFFFFF]">
            <img src={assets.email_icon} alt="" />
            <input
              name="name"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={12}
            placeholder="Enter your Message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 bg-[#FFFFFF]"
            id=""
            required
          />
        </div>
        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >Submit <img src={assets.arrow_icon} alt="" className="w-4" /> </button>
      </form>
    </div>
  );
};

export default ContactUs;
