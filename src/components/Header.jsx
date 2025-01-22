import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to manage theme (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the theme when the component mounts or the theme changes
  useEffect(() => {
    // Check the initial theme from localStorage or the document's class
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage when it changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md dark:bg-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold text-orange-600">
      <Link to="/" className="text-4xl font-bold text-orange-600">
        <span className="block animate-slideUp">Four Season</span>
        <span className="block animate-slideUp">Spice London.</span>
      </Link>
      </h1>
      <nav className="flex gap-6 text-gray-700 dark:text-gray-300">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/menu" className="hover:underline">Menu</Link>
        <Link to="/contact-us" className="hover:underline">Contact Us</Link>
      </nav>
      <div className="flex items-center gap-4">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <span className="sr-only">Toggle Theme</span>
          {isDarkMode ? "🌙" : "🌞"} {/* Switches icon based on theme */}
        </button>
        {/* <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <span className="sr-only">View Cart</span> 🛒
        </button> */}
       <Link to="/about-us">
                   <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transform hover:scale-105 transition-all duration-300">
                     About Us
                   </button>
                 </Link>
      </div>
    </header>
  );
};

export default Header;
