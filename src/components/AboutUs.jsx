import React from 'react';
import '../App.css';
const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-500">About Four Season Spice London</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Experience the taste of authentic Indian spices, crafted with love and tradition.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Left side - Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://img.freepik.com/premium-photo/restaurant-background-images-copy-space_1179130-738149.jpg"
              alt="Restaurant"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">Our Story</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Welcome to Four Season Spice London, where every dish is a celebration of authentic flavors.
              Our journey began with a passion for bringing the rich, aromatic spices of India to the heart of London.
              We strive to provide an unforgettable dining experience, offering a menu that blends traditional recipes
              with a modern twist. Whether you are here for a casual meal or a special occasion, we guarantee that every
              bite will leave you craving more.
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700">
              At Four Season Spice, we are dedicated to offering our guests an exceptional culinary experience
              through the use of high-quality ingredients, locally sourced produce, and a passion for culinary excellence.
              Our mission is to deliver delicious and authentic food, combined with impeccable service, in a warm
              and inviting atmosphere. We believe in the power of food to bring people together, creating memorable moments
              for all who walk through our doors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
