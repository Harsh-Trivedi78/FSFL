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
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">STARTER</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/del069923-tomato-soup-131-rv-index-649ded2d7fcd3.jpg?crop=0.502xw:1.00xh;0.401xw,0&resize=1200:*"
                  alt="Tomato Soup"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Tomato Soup</span>
                <span className="text-orange-600 font-bold">$10</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://www.allrecipes.com/thmb/IhQhEfMAeIRupmvXn6DYrfF9zNs=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8814-homemade-chicken-soup-DDMFS-beauty-4x3-31640-924adc63a78543a7822c5704727f6e4b.jpg"
                  alt="Chicken Soup"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Chicken Soup</span>
                <span className="text-orange-600 font-bold">$12</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/440393-1-eng-GB_spicy-sweetcorn-soup.jpg"
                  alt="Crispy Corn"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Crispy Corn</span>
                <span className="text-orange-600 font-bold">$8</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.yHeFQPsDDvV6hEHB3m7HTwHaE6&w=314&h=314&c=7"
                  alt="Verduras Con"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Verduras Con</span>
                <span className="text-orange-600 font-bold">$9</span>
              </li>
            </ul>
          </div>

          {/* Salad */}
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">SALAD</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.w5d6TTXWvfc3p3gXRFeBrgHaLH&w=200&h=300&c=7"
                  alt="Guacamole Salad"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Guacamole Salad</span>
                <span className="text-orange-600 font-bold">$15</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.ur0TGMSAP5mxBv9CgZPyrgHaKz&w=200&h=292&c=7"
                  alt="Chicken Salad"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Chicken Salad</span>
                <span className="text-orange-600 font-bold">$14</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.O9GnmutLCcD6m_wDoeuT2AHaJL&w=200&h=248&c=7"
                  alt="Green Salad"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Green Salad</span>
                <span className="text-orange-600 font-bold">$12</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.k4ZdRIiEqq3GJ6qiUc4fBQHaLH&w=200&h=300&c=7"
                  alt="Salmon Salad"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Salmon Salad</span>
                <span className="text-orange-600 font-bold">$18</span>
              </li>
            </ul>
          </div>

          {/* Main Dishes */}
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">MAIN DISHES</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.6yczwPAip81epaGpDwk0eAHaLH&w=200&h=300&c=7"
                  alt="Wonton Soup"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Wonton Soup</span>
                <span className="text-orange-600 font-bold">$20</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.E7altVRoSFN1mLYaKgGwbQHaHa&w=200&h=200&c=7"
                  alt="Mashed Potatoes"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Mashed Potatoes</span>
                <span className="text-orange-600 font-bold">$18</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.HQv7WH4EPjdMeA-yAk1yLwHaHa&w=200&h=200&c=7"
                  alt="Pappardelle"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Pappardelle</span>
                <span className="text-orange-600 font-bold">$22</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.lBpb8SMNI85W8aN1LR54kQHaGL&w=200&h=167&c=7"
                  alt="Grilled Octopus"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Grilled Octopus</span>
                <span className="text-orange-600 font-bold">$25</span>
              </li>
            </ul>
          </div>

          {/* Beverages */}
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">BEVERAGES</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.HvAJbhmHxESuEqbzgcGB_wHaG9&w=200&h=188&c=7"
                  alt="Mineral Water"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Mineral Water</span>
                <span className="text-orange-600 font-bold">$5</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.iztlpqBdMWRs23FizYdZmAHaE7&w=200&h=133&c=7"
                  alt="Coffee"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Coffee</span>
                <span className="text-orange-600 font-bold">$7</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.ZJctJHe8Q03EnltRbEx6MwHaFE&w=200&h=137&c=7"
                  alt="Fruit Juice"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Fruit Juice</span>
                <span className="text-orange-600 font-bold">$6</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.O2IfzcovlZu3D5OnX5goRwHaFi&w=200&h=149&c=7"
                  alt="Tea"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Tea</span>
                <span className="text-orange-600 font-bold">$4</span>
              </li>
            </ul>
          </div>

          {/* Desserts */}
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">DESSERT</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.T9e_JZywUr72L9IqNKLmHAHaJQ&w=200&h=250&c=7"
                  alt="Cheesecake"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Cheesecake</span>
                <span className="text-orange-600 font-bold">$10</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.DxP-oL_4vn6b8j9Hf8n1ogHaEv&w=200&h=128&c=7"
                  alt="Magnolia"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Magnolia</span>
                <span className="text-orange-600 font-bold">$9</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.kjYqwaz8vRePj9bxVUHunAHaLH&w=200&h=300&c=7"
                  alt="Berry Cake"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Berry Cake</span>
                <span className="text-orange-600 font-bold">$11</span>
              </li>
              <li className="flex justify-between items-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.i0EkOplXb2Y8jXa82DnpRQHaLH&w=200&h=300&c=7"
                  alt="Tiramisu"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-gray-700 font-semibold">Tiramisu</span>
                <span className="text-orange-600 font-bold">$12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
