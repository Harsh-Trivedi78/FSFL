import React from "react";

const Menu = () => {
  return (
    <div
      className="min-h-screen p-10"
      style={{
        backgroundImage: "url('/db.jpg')",
        backgroundSize: "contain", // or use "50%" to shrink
      }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-inner rounded-lg p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-600">FOOD MENU</h1>
          <p className="text-gray-700 font-semibold">Open Everday!</p>
        </header>

        {/* Menu Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Starters */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/029/287/406/small/of-tandoori-chicken-as-a-dish-in-a-high-end-restaurant-generative-ai-photo.jpg"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
              Non-Veg Starters
            </h2>
            <div className="flex justify-between px-2 text-sm font-medium text-gray-600 mb-2">
              <span className="flex-grow"></span>
              <span className="text-right font-bold">Eating In / Takeaway</span>
            </div>
            <ul className="space-y-4">
              {[
                ["Lamb Sheek Kabab", "£7.99 / £6.99"],
                ["Shahi Mutton Chops", "£9.99 / £9.99"],
                ["Lamb Shami Kabab", "£9.99 / £8.99"],
                ["Tandoori Chicken Half", "£4.99 / £3.99"],
                ["Tandoori Chicken Full", "£6.99 / £5.99"],
                ["Tandoori Chicken Tikka", "£6.99 / £5.99"],
                ["Murg Malai Tikka", "£7.99 / £5.99"],
                ["Chicken Sheek Kabab", "£6.99 / £5.99"],
                ["Chicken Wings", "£6.99 / £5.99"],
                ["Chicken Mix Platter", "£14.99 / £12.99"],
                ["Chicken 65", "£7.99 / £6.99"],
                ["Chilli Chicken", "£7.99 / £6.99"],
                ["Chicken Manchurian", "£7.99 / £6.99"],
                ["Chicken Lollipop", "£7.99 / £6.99"],
                ["Golden Prawns", "£9.99 / £8.99"],
                ["Fish Pakoda", "£6.99 / £5.99"],
                ["Amritsari Fish", "£6.99 / £5.99"],
              ].map(([dish, price]) => (
                <li key={dish} className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">{dish}</span>
                  <span className="text-orange-600 font-bold">{price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Salad */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <img
                src="https://assets.zeezest.com/blogs/PROD_Banner_1663162846668.jpg"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
              Non-Veg Main Course
            </h2>
            <div className="flex justify-between px-2 text-sm font-medium text-gray-600 mb-2">
              <span className="flex-grow"></span>
              <span className="text-right font-bold">Eating In / Takeaway</span>
            </div>
            <ul className="space-y-4">
              {[
                ["Butter Chicken", "£7.99 / £6.99"],
                ["Chicken Tikka Masala", "£7.99 / £6.99"],
                ["Chicken Jalfrezi", "£7.99 / £6.99"],
                ["Chicken Kadai", "£7.99 / £6.99"],
                ["Chicken Madras", "£7.99 / £6.99"],
                ["Gungura Chicken", "£7.99 / £6.99"],
                ["Palak Chicken", "£7.99 / £6.99"],
                ["Chicken Chettinad", "£7.99 / £6.99"],
                ["Lamb Jalfrezi", "£8.99 / £7.99"],
                ["Mutton Kadai", "£8.99 / £7.99"],
                ["Gungura Mutton", "£8.99 / £7.99"],
                ["Lal Maas", "£7.99 / £6.99"],
                ["Tala Huwa Mutton", "£8.99 / £7.99"],
                ["Ghee Roasted Mutton", "£8.99 / £7.99"],
                ["Prawn Curry", "£8.99 / £7.99"],
                ["Prawn Jalfrezi", "£8.99 / £7.99"],
                ["Fish Curry", "£8.99 / £7.99"],
              ].map(([dish, price]) => (
                <li key={dish} className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">{dish}</span>
                  <span className="text-orange-600 font-bold">{price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Dishes */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <img
                src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
                alt="Hyderabadi Biryani"
                className="w-10 h-10 rounded-md object-cover"
              />
              Saffron Loaded Dum Biryani
            </h2>

            {/* Price Label Row */}
            <div className="flex justify-between px-2 text-sm font-medium text-gray-600 mb-2">
              <span className="flex-grow"></span>
              <span className="text-right font-bold">Eating In / Takeaway</span>
            </div>

            <ul className="space-y-4">
              {[
                ["Lamb Dum Biryani", "£7.99 / £6.99"],
                ["Chicken Tikka Biryani", "£6.99 / £5.99"],
                ["Chicken Dum Biryani", "£5.99 / £4.99"],
                ["Chicken 65 Biryani", "£6.99 / £5.99"],
              ].map(([dish, price]) => (
                <li key={dish} className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">{dish}</span>
                  <span className="text-orange-600 font-bold">{price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Indo-Chinese Fried Rice */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <img
                src="https://masalachilli.com/wp-content/uploads/2020/08/Vegetable-Fried-Rice-Recipe-5.jpg"
                alt="Fried Rice"
                className="w-10 h-10 rounded-md object-cover"
              />
              Non-Veg Indo-Chinese
            </h2>
            <div className="flex justify-between px-2 text-sm font-medium text-gray-600 mb-2">
              <span className="flex-grow"></span>
              <span className="text-right font-bold">Eating In / Takeaway</span>
            </div>
            <ul className="space-y-4">
              {[
                ["Chicken Fried Rice", "£7.99 / £6.99"],
                ["Chicken Schezwan Fried Rice", "£8.99 / £7.99"],
                ["Egg Fried Rice", "£6.99 / £5.99"],
                ["Egg Schezwan Fried Rice", "£7.99 / £6.99"],
                ["Chicken Noodles", "£7.99 / £6.99"],
                ["Chicken Schezwan Noodles", "£8.99 / £7.99"],
                ["Egg Noodles", "£6.99 / £5.99"],
                ["Egg Schezwan Noodles", "£7.99 / £6.99"],
              ].map(([dish, price]) => (
                <li key={dish} className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">{dish}</span>
                  <span className="text-orange-600 font-bold">{price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lJFQ2iGKnCXtdJ-z-rir1z6XuinZOdKU9A&s"
                alt="Veg Starters"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="font-bold">Veg Starters</span>
            </h2>
            <div className="flex justify-between px-2 text-sm font-medium text-gray-600 mb-2">
              <span className="flex-grow"></span>
              <span className="text-right font-bold">Eating In / Takeaway</span>
            </div>
            <ul className="space-y-4">
              {[
                ["Punjabi Samosa Chat", "£3.99 / £3.50"],
                ["Sweet Corn Aloo Tikka Chat", "£3.99 / £3.50"],
                ["Paneer Tikka (Achari)", "£7.99 / £6.99"],
                ["Chilli Garlic Mushroom", "£7.99 / £6.99"],
                ["Chilli Paneer", "£7.99 / £6.99"],
                ["Veg Manchurian", "£7.99 / £6.99"],
                ["Cut Mirchi", "£4.99 / £3.99"],
              ].map(([dish, price]) => (
                <li key={dish} className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">{dish}</span>
                  <span className="text-orange-600 font-bold">{price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <img
                src="https://img.freepik.com/premium-photo/indian-lunch-dinner-main-course-food-group-includes-paneer-butter-masala-dal-makhani-palak-paneer-roti-rice-etc-selective-focus_466689-6855.jpg"
                alt="Veg Main Course"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="font-bold">VEG MAIN COURSE / SIDE</span>
            </h2>
            <div className="flex justify-between px-2 text-sm font-medium text-gray-600 mb-2">
              <span className="flex-grow"></span>
              <span className="text-right font-bold">Eating In / Takeaway</span>
            </div>
            <ul className="space-y-4">
              {[
                ["Dal Makhani", "£6.99 / £5.99"],
                ["Dal Tadka", "£5.99 / £4.99"],
                ["Palak Paneer", "£6.99 / £6.00"],
                ["Bhindi Masala", "£6.99 / £5.99"],
                ["Paneer Tikka Masala", "£6.99 / £5.99"],
                ["Paneer Butter Masala", "£6.99 / £5.99"],
                ["Chana Masala", "£6.99 / £5.99"],
              ].map(([dish, price]) => (
                <li key={dish} className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">{dish}</span>
                  <span className="text-orange-600 font-bold">{price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yiKji7VogDPq7f0bwBAGSZ9IvCaK2l0OXw&s"
                alt="Desserts"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="font-bold">DESSERTS</span>
            </h2>
            <div className="flex justify-between px-2 text-sm font-medium text-gray-600 mb-2">
              <span className="flex-grow"></span>
              <span className="text-right font-bold">Eating In / Takeaway</span>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">
                  Gulab Jamun (2pcs)
                </span>
                <span className="text-orange-600 font-bold">£3.99 / £3.50</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">
                  Gulab Jamun with Ice-Cream
                </span>
                <span className="text-orange-600 font-bold">£4.99</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">
                  Double Ka Meetha
                </span>
                <span className="text-orange-600 font-bold">£4.99 / £3.50</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Shahi Tukda</span>
                <span className="text-orange-600 font-bold">£4.99 / £3.50</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwFn2RKtgneA76FtUvk6h-XhQfdRFue4jow&s"
                alt="Drinks"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="font-bold">DRINKS</span>
            </h2>
            <div className="flex justify-between px-2 text-sm font-medium text-gray-600 mb-2">
              <span className="flex-grow"></span>
              <span className="text-right font-bold">Eating In / Takeaway</span>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Coke</span>
                <span className="text-orange-600 font-bold">£1.50 / £0.99</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Coke Zero</span>
                <span className="text-orange-600 font-bold">£1.50 / £0.99</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Sprite</span>
                <span className="text-orange-600 font-bold">£1.50 / £0.99</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Pepsi</span>
                <span className="text-orange-600 font-bold">£1.50 / £0.99</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Water</span>
                <span className="text-orange-600 font-bold">£1.50 / £0.99</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Fanta</span>
                <span className="text-orange-600 font-bold">£1.50 / £0.99</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Mango Lassi</span>
                <span className="text-orange-600 font-bold">£3.99 / £3.50</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Plain Lassi</span>
                <span className="text-orange-600 font-bold">£3.50 / £2.99</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
