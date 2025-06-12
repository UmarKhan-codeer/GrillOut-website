import React from "react";
import PizzaCategory from "./PizzaCategory";

function FoodMenu() {
  return (
    <main className="flex overflow-hidden flex-col items-center pb-5 bg-gray-950 max-w-[361px]">
      <PizzaCategory />
      {/* <div className="h-0.5 w-80 bg-white"></div> */}
    </main>
  );
}

export default FoodMenu;