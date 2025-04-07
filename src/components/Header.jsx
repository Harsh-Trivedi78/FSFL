import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

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
    <header className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800 dark:text-white relative">
      <div className="flex items-center">
        <img
          src="./favicon_io (3)/android-chrome21-512x512.png"
          alt="Logo"
          className="h-10 w-10 mr-3"
        />
        <Link to="/" className="text-2xl font-extrabold text-orange-600">
          <span className="block leading-tight">Four Season</span>
          <span className="block leading-tight">Spice London.</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 text-gray-700 dark:text-gray-300">
        <Link to="/" className="hover:underline hover:text-orange-600 dark:hover:text-orange-400 font-extrabold">Home</Link>
        <Link to="/menu" className="hover:underline hover:text-orange-600 dark:hover:text-orange-400 font-extrabold">Menu</Link>
        <Link to="/contact-us" className="hover:underline hover:text-orange-600 dark:hover:text-orange-400 font-extrabold">Contact Us</Link>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="md:hidden text-2xl focus:outline-none" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Navigation (Dropdown) */}
      {isMenuOpen && (
  <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col w-48 md:hidden z-50">
    <Link to="/" className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold">
      Home
    </Link>
    <Link to="/menu" className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold">
      Menu
    </Link>
    <Link to="/contact-us" className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold">
      Contact Us
    </Link>
  </div>
)}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          aria-label="Toggle theme"
        >
          {isDarkMode ? "🌙" : "🌞"}
        </button>

        <Link to="/about-us">
          <button className="px-4 py-2 text-sm md:px-5 md:py-2.5 bg-orange-600 text-white font-extrabold rounded-full hover:bg-orange-700 transition-colors duration-300">
            About Us
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
