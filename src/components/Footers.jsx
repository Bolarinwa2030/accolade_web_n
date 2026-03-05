import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 pt-12 pb-6 px-6 sm:px-12 lg:px-24 mt-5">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Logo & About */}
        <div className="flex flex-col gap-4 max-w-sm">
          <img src={assets.Logo_Correct} alt="Accolade Electric Logo" className="w-32 h-auto" />
          <p className="text-sm">
            Accolade Electric provides high-quality solar installations and certified electrical solutions for homes and businesses. Power your property smarter and more efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#hero" className="hover:text-green-500 transition-colors">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-500 transition-colors">Services</a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-green-500 transition-colors">Contact</a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-500 transition-colors">About</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm flex items-center gap-2">📞 +234 801 234 5678</p>
          <p className="text-sm flex items-center gap-2">✉️ info@accoladeelectric.com</p>
          <p className="text-sm flex items-center gap-2">📍 Ibadan, Nigeria</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2026 Accolade Electric. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#!" className="hover:text-green-500 transition-colors">
            <img src={assets.WhatsApp} alt="WhatsApp" className="w-5 h-5" />
          </a>
          <a href="#!" className="hover:text-green-500 transition-colors">
            <img src={assets.email_icon} alt="Email" className="w-5 h-5" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;