import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
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
    <header className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800 dark:text-white">
      <div className="flex items-center">
        <img 
          src="./favicon_io (3)/android-chrome21-512x512.png" 
          alt="Logo" 
          className="h-10 w-10 mr-3" 
        />
        <Link to="/" className="text-2xl font-bold text-orange-600">
          <span className="block leading-tight">Four Season</span>
          <span className="block leading-tight">Spice London.</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex gap-4 text-gray-700 dark:text-gray-300">
        <Link to="/" className="hover:underline hover:text-orange-600 dark:hover:text-orange-400">Home</Link>
        <Link to="/menu" className="hover:underline hover:text-orange-600 dark:hover:text-orange-400">Menu</Link>
        <Link to="/contact-us" className="hover:underline hover:text-orange-600 dark:hover:text-orange-400">Contact Us</Link>
      </nav>
      
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          aria-label="Toggle theme"
        >
          {isDarkMode ? "🌙" : "🌞"}
        </button>
        
        <Link to="/about-us">
          <button className="px-4 py-2 text-sm md:px-5 md:py-2.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300">
            About Us
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;