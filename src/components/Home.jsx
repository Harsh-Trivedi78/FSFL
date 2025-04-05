import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-orange-100 dark:bg-gray-900">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src="/ch14.jpg"  // Ensure this file is in the 'public' folder
      alt="Delicious food"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Content */}
  <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row gap-8 p-8 lg:py-20 pt-16 lg:pt-32 relative z-10">
    <div className="text-center lg:text-left">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white dark:text-white">
        <span className="text-orange-600 dark:text-orange-600">Four Season</span> Spice London. <br/>
        <span className="text-white dark:text-white">Order your favorite <br /> <span className="text-orange-600">food here</span></span>  
      </h2>
      <p className="text-white text-lg mb-6 max-w-md font-extrabold ">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and satisfy your cravings.
      </p>
    </div>
  </div>
</section>


      {/* Explore Menu Section */}
      <section className="py-16 bg-white text-center dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-extrabold text-orange-600 dark:text-orange-400 mb-4">Explore Our Menu</h3>
          <p className="text-orange-600 dark:text-gray-300 mb-8 font-extrabold">
          Choose from a diverse menu featuring a delectable array of dishes. Whether you're craving chicken, lamb, and Spicy Asian dishes, we have it all. Our ingredients are carefully selected to ensure the best taste and quality.


            <br />
            <span className="font-extrabold">Indulge in a variety of meals that will leave you coming back for more!</span>
          </p>
          <Link to="/menu">
            <button className=" px-6 py-3 bg-orange-600 text-white font-extrabold  rounded-full hover:bg-orange-700 transform hover:scale-105 transition-all duration-300">
              View Menu
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
