"use client";
import React, { useState, useEffect, useRef } from "react";
import Dropdown3 from "./Dropdown3";
import Heading from "./Heading";
import OrderButton from "./OrderButton";

function Dessert() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Hot Fudge Brownie",
      sizes: {
        PKR: "499",
      },
      description: "with scoop of ice-cream"
    },
    {
      name: "Hot Brownie",
      sizes: {
        PKR: "350",
      },
      description: "with fudge syrup"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className={`bg-black py-6 relative ${isVisible ? "fade-in-up" : ""}`}
        ref={ref}
      >
        <Heading />
        <Dropdown3/>
        <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">Dessert</h2>
        <div className="max-h-[450px] md:pl-96 ">
          {/* Responsive grid system for different screen sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[800px] mx-auto">
            {foodItems.map((item, index) => (
              <article className="flex flex-col items-center" key={index}>
                <h3 className="self-center mt-3 text-xl w-full text-center min-w-[120px]">
                  {item.name}
                </h3>
                <p className="self-center mt-1 text-center text-sm text-gray-300">
                  {item.description}
                </p>
                <div className="self-center mt-2">
                  {Object.entries(item.sizes).map(([size, price]) => (
                    <p key={size} className="text-lg w-full text-yellow-400 flex justify-between mt-1">
                      <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                      <span className="ml-2">{price}</span>
                    </p>
                  ))}
                </div>
                <OrderButton />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dessert;
