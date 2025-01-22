import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
//   const handleSocialClick = (e) => {
//     e.preventDefault(); // Prevents default anchor behavior (page scroll)
//     console.log("Social icon clicked");
//   };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Text Description */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-orange-500">Four Season Spice London</h1>
          <p className="mt-2 text-sm">
            A place where you can enjoy delicious food with great service.
          </p>
          {/* <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <button
              onClick={handleSocialClick}
              className="hover:text-orange-500"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              onClick={handleSocialClick}
              className="hover:text-orange-500"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              onClick={handleSocialClick}
              className="hover:text-orange-500"
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div> */}
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-orange-500">Home</a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-orange-500">About us</a>
            </li>
            <li>
              <a href="/menu" className="hover:text-orange-500">Menu</a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-orange-500">Contact-us</a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
          <p className="text-sm">+447467151723</p>
          <p className="text-sm">Sbgsscl1610@gmail.com</p>

          {/* <p className="text-sm">contact@tomato.com</p> */}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        Copyright 2025 ©FourSeasonSpiceLondon - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
