import React from 'react';

const Extratopping = () => {

  const toppings = [
    { name: "Cheese", small: "169", medium: "249", large: "299" },
    { name: "Chicken", small: "169", medium: "249", large: "299" },
  ];

  return (
    <div>
      {/* Extra Toppings Section */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-white">Extra Toppings</h3> {/* Increased font size */}
        <div className="grid grid-cols-1 gap-y-6 mt-6 w-full text-lg font-extrabold text-white max-w-[600px] mx-auto"> {/* Increased gap and font size */}
          {toppings.map((topping, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Topping Name */}
              <h4 className="text-xl">{topping.name}</h4> {/* Increased topping name size */}
              {/* Sizes and Prices */}
              <div className="flex flex-col items-center justify-center w-full mt-4">
                <div className="flex justify-around w-full text-lg"> {/* Increased text size */}
                  <span className="w-[80px]">Small {topping.small}</span> {/* Increased width for better spacing */}
                  <span className="w-[80px]">Medium {topping.medium}</span>
                  <span className="w-[80px]">Large {topping.large}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extratopping;
