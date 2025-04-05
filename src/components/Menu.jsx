import React from "react";

const Menu = () => {
  return (
    <div className="bg-orange-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
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
              Grill / Tandoor
            </h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Tandoori Chicken (HALF)</span>
              <span className="text-orange-600 font-bold">£5.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Tandoori Chicken (FULL)</span>
              <span className="text-orange-600 font-bold">£10.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Chicken Grill Platter</span>
              <span className="text-orange-600 font-bold">£19.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Mini Mix Grill</span>
              <span className="text-orange-600 font-bold">£10.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Chicken Tikka</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Malai Tikka</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Chicken Chaitinad Tikka</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Hariyali Tikka (Green Tikka)</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Lamb Kebabs (4 pieces)</span>
              <span className="text-orange-600 font-bold">£8.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Chicken Kebabs (4 pieces)</span>
              <span className="text-orange-600 font-bold">£8.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Chicken Wings (10 pieces)</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Four Season Spice Special Lamb Kofta (Shami Kebab) (4 pieces)</span>
              <span className="text-orange-600 font-bold">£9.99</span>
            </li>
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
            INDO-CHINESE STARTERS</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken 65</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chilli Chicken</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Manchurian</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Majestic</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Lollipop</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Schezwan</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Pepper Chicken</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chilli Garlic Prawns</span>
              <span className="text-orange-600 font-bold">£9.99</span>
            </li>
          </ul>
        </div>
          {/* Main Dishes */}
          <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <img
                src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
            
            HYDERABADI DUM BIRYANI</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Saffron Loaded</span>
              <span className="text-orange-600 font-bold">£3.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Veg Biryani</span>
              <span className="text-orange-600 font-bold">£3.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Egg Biryani</span>
              <span className="text-orange-600 font-bold">£4.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken / Lamb Family Pack</span>
              <span className="text-orange-600 font-bold">£13.99 / £25.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken 65 Biryani</span>
              <span className="text-orange-600 font-bold">£4.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Plain Rice</span>
              <span className="text-orange-600 font-bold">£2.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Biryani Rice (Kushka)</span>
              <span className="text-orange-600 font-bold">£3.50</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Mandi Rice</span>
              <span className="text-orange-600 font-bold">-</span>
            </li>
          </ul>
        </div>

        {/* Indo-Chinese Fried Rice */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <img
                src="https://masalachilli.com/wp-content/uploads/2020/08/Vegetable-Fried-Rice-Recipe-5.jpg"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
            INDO-CHINESE FRIED RICE</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Veg Schezwan Fried Rice</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Egg Fried Rice</span>
              <span className="text-orange-600 font-bold">£5.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Egg Schezwan Fried Rice</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Fried Rice</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Schezwan Fried Rice</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
          </ul>
        </div>

        {/* Indo-Chinese Starters */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <img
                src="https://static.vecteezy.com/system/resources/thumbnails/029/287/406/small/of-tandoori-chicken-as-a-dish-in-a-high-end-restaurant-generative-ai-photo.jpg"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
            INDO-CHINESE STARTERS</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken 65</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chilli Chicken</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Manchurian</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Majestic</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Lollipop</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Schezwan</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Pepper Chicken</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chilli Garlic Prawns</span>
              <span className="text-orange-600 font-bold">£9.99</span>
            </li>
          </ul>
        </div> */}

          {/* Beverages */}
          <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <img
                src="https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Roast-seafood-dish-b585388.jpg?resize=1200%2C630"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
            SEAFOOD</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Masala Fish</span>
              <span className="text-orange-600 font-bold">£8.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Amritsari Fish</span>
              <span className="text-orange-600 font-bold">£8.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Fish Pakoda</span>
              <span className="text-orange-600 font-bold">£8.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Golden Prawns</span>
              <span className="text-orange-600 font-bold">£11.99</span>
            </li>
          </ul>
        </div>
       
          {/* Desserts */}
          {/* <div className="mt-8">
             <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-600">Vegetarian Snacks and Noodles :  </h1>
          <p className="text-gray-700 font-semibold">Open Everday!</p>
        </header>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">SEAFOOD</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Masala Fish</span>
              <span className="text-orange-600 font-bold">£8.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Amritsari Fish</span>
              <span className="text-orange-600 font-bold">£8.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Fish Pakoda</span>
              <span className="text-orange-600 font-bold">£8.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Golden Prawns</span>
              <span className="text-orange-600 font-bold">£11.99</span>
            </li>
          </ul>
        </div> */}
        
         <div className="mt-8">
          
          
          {/* <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-600">Vegetarian Snacks and Noodles :  </h1>
            <p className="text-gray-700 font-semibold">Open Everday!</p>
          </header> */}
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
            <img
                src="https://images.slurrp.com/webstories/wp-content/uploads/2022/09/Indian-snacks-scaled.jpg"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
              VEGETARIAN SNACKS</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Samosa Chat</span>
              <span className="text-orange-600 font-bold">£5.94</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chilli Paneer</span>
              <span className="text-orange-600 font-bold">£6.91</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Veg Manchurian</span>
              <span className="text-orange-600 font-bold">£5.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Cut Mirchi</span>
              <span className="text-orange-600 font-bold">£4.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Gobi Manchurian</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
          </ul>
          
        </div>
        <div className="mt-8 ">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSpezK-y4jY51_NLS7U5zIdNBVa99Yh-p0w&s"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
            NOODLES</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Indo Chinese Noodles</span>
              <span className="text-orange-600 font-bold">-</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Noodles</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Chicken Schezwan Noodles</span>
              <span className="text-orange-600 font-bold">£7.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Veg Noodles</span>
              <span className="text-orange-600 font-bold">£5.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">Veg Schezwan Noodles</span>
              <span className="text-orange-600 font-bold">£6.99</span>
            </li>
          </ul>
          
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
            
          <img
                src="https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
            
            CHICKEN DISHES</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Chicken Curry (Andhra)</span><span className="text-orange-600 font-bold">£6.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Kodi Vepudu (Roasted Chicken)</span><span className="text-orange-600 font-bold">£6.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Gungura Chicken</span><span className="text-orange-600 font-bold">£6.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Butter Chicken</span><span className="text-orange-600 font-bold">£6.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Chicken Tikka Masala</span><span className="text-orange-600 font-bold">£6.99</span></li>
          </ul>
        </div>

        {/* Lamb Dishes */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <img
                src="https://www.thespruceeats.com/thmb/VCUxvCQDXIauIMnSsjDjBaRqCvg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-roast-leg-of-lamb-recipe-101495-hero-01-47b3b440930a458caacf18adcfbcf90a.jpg"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
            LAMB DISHES</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Lamb Curry</span><span className="text-orange-600 font-bold">£7.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Lamb Masala</span><span className="text-orange-600 font-bold">£7.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Lamb Kadai</span><span className="text-orange-600 font-bold">£7.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Lamb Roast (Chief)</span><span className="text-orange-600 font-bold">£7.99</span></li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yiKji7VogDPq7f0bwBAGSZ9IvCaK2l0OXw&s"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />DESSERTS</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Double Ka Meetha</span><span className="text-orange-600 font-bold">£3.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Subtail Ka Meetha with Ice Cream</span><span className="text-orange-600 font-bold">£3.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Kulfi</span><span className="text-orange-600 font-bold">£3.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Karmiri Rabdi with Chamber Special</span><span className="text-orange-600 font-bold">£5.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Kaddu Ki Kheer</span><span className="text-orange-600 font-bold">£3.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Mango Lassi</span><span className="text-orange-600 font-bold">£3.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Sweet Lassi</span><span className="text-orange-600 font-bold">£3.99</span></li>
            <li className="flex justify-between items-center"><span className="text-gray-700 font-bold">Mojito</span><span className="text-orange-600 font-bold">£3.99</span></li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
            
          <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLboY0Kep5cE0QM53FtYPtscKEq8URi8Qjpg&s"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />SEASONAL SPECIALS</h2>
          <ul className="space-y-4 text-gray-700 font-bold">
          <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">Four Season Spice London Menu</span>
          {/* <span className="text-orange-600 font-bold">£9.99</span> */}
          </li>
            {/* <li>Four Season Spice London Menu - £9.99</li> */}

            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">CHICKEN MANDI</span>
          <span className="text-orange-600 font-bold">£11.99</span>
          </li>
            {/* <li>CHICKEN MANDI - £11.99</li> */}
            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">LAMB MANDI</span>
          <span className="text-orange-600 font-bold">£11.99</span>
          </li>
            {/* <li>LAMB MANDI - £11.99</li> */}
            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">CHICKEN KHABSA</span>
          <span className="text-orange-600 font-bold">£11.99</span>
          </li>
            {/* <li>CHICKEN KHABSA - £11.99</li> */}
            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">LAMB KHABSA </span>
          <span className="text-orange-600 font-bold">£11.99</span>
          </li>
            {/* <li>LAMB KHABSA - £11.99</li>
             */} <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">FISH MANDI</span>
          <span className="text-orange-600 font-bold">£9.99</span>
          </li>
            {/* <li>FISH MANDI - £9.99</li> */}
            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">LAMB MANDI - FAMILY PACK</span>
          <span className="text-orange-600 font-bold">£34.99</span>
          </li>
            {/* <li>LAMB MANDI - FAMILY PACK - £34.99</li> */}
            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">CHICKEN MANDI - FAMILY PACK</span>
          <span className="text-orange-600 font-bold"> £29.99</span>
          </li>
            {/* <li>CHICKEN MANDI - FAMILY PACK - £29.99</li> */}
            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">MIX MANDI</span>
          <span className="text-orange-600 font-bold"> £9.99</span>
          </li>

            {/* <li>MIX MANDI -</li> */}  <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">HALEEM (SMALL PLATE)</span>
          <span className="text-orange-600 font-bold"> £4.99</span>
          </li>
            {/* <li>HALEEM (SMALL PLATE) - £4.99</li> */}
            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">HALEEM (FULL PLATE)</span>
          <span className="text-orange-600 font-bold"> £8.99</span>
          </li>

            {/* <li>HALEEM (FULL PLATE) - £8.99</li> */}

            <li className="flex justify-between items-center">
            <span className="text-gray-700 font-bold">HALEEM (FAMILY PACK)</span>
          <span className="text-orange-600 font-bold">  £15.99</span>
          </li>
            {/* <li>HALEEM (FAMILY PACK) - £15.99</li> */}
          </ul>
        </div>
         <div className="mt-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
          <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEWlgoAj8vZGWh0MOZs_X9GEUwcDjODNdtg&s"
                alt="Tomato Soup"
                className="w-10 h-10 rounded-md object-cover"
              />
            
            DAILY SPECIALS</h2>
          <ul className="space-y-4 text-gray-700 font-bold">
            <li className="text-lg font-bold text-orange-600">Monday</li>
            <li>Payer Chicken/Rummi-Primary </li>
            <li>Afghani Chicken </li>
            <li>Afghani Polad </li>
            <li>Haleem Rummi </li>
            <li>State Mix </li>
            <li>Kaddu Ki Kheer </li>
            <li>Asset Dries Chai </li>
            <li className="text-lg font-bold text-orange-600">Tuesday</li>
            <li>Paneer Tikka Masala </li>
            <li>Veg Poloa </li>
            <li>Haleem Rummi </li>
            <li>Maraa </li>
            <li>Mandi </li>
            <li>Kasmi Ri Razdi Chamcha </li>
            <li className="text-lg font-bold text-orange-600">Wednesday</li>
            <li>Kaleji Kebab -</li>
            <li>Kheema Kebab -</li>
            <li>Khichdi Khatta -</li>
            <li>Tandoori Mix -</li>
            <li>Gulab Jamun with Ice Cream -</li>
            <li>Black Tea -</li>
            <li className="text-lg font-bold text-orange-600">Thursday</li>
            <li>Gjonkajara Lamb -</li>
            <li>Kheema Polad -</li>
            <li>Sea Food -</li>
            <li>Fish Fry and Grilled Prawns -</li>
            <li>Double Ka Meetha -</li>
            <li>Kadak Hyderabadi Chai -</li>
          </ul>
        </div>
       
        
        </div>
      </div>
    </div>
  );
};

export default Menu;
