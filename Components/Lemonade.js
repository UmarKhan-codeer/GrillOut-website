"use client";
import React, { useState, useEffect, useRef } from "react";
import Extratopping from "./Extratopping";
import Dropdown2 from "./Dropdown2";
import Heading from "./Heading";
import OrderButton from "./OrderButton";

function Lemonade () {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Mint Margaretta",
      sizes: {
        PKR: "300",
      },
    },
    {
      name: "Spanish Margaretta",
      sizes: {
        PKR: "300",
      },
    },
    {
      name: "Pinacolada",
      sizes: {
        PKR: "450",
      },
    },
    {
      name: "Electric Lemonade",
      sizes: {
        PKR: "400",
      },
    },
    {
      name: "Strawberry Lemonade",
      sizes: {
        PKR: "450",
      },
    },
    {
      name: "Strawberry Mojito",
      sizes: {
        PKR: "400",
      },
    },
    {
      name: "Mint Mojito",
      sizes: {
        PKR: "400",
      },
    },
    {
      name: "Plain Lemonade",
      sizes: {
        PKR: "250",
      },
    },
    {
      name: "Blueberry Chiller",
      sizes: {
        PKR: "400",
      },
    },
    {
      name: "Strawberry Chiller",
      sizes: {
        PKR: "400",
      },
    },
    {
      name: "Special Chiller",
      sizes: {
        PKR: "450",
      },
    },
    {
      name: "Peech Shooter Soda",
      sizes: {
        PKR: "350",
      },
    },
    {
      name: "Raspberry Chiller",
      sizes: {
        PKR: "400",
      },
    },
    {
      name: "Peech Ice Tea",
      sizes: {
        PKR: "400",
      },
    },
    {
      name: "Fresh Lime",
      sizes: {
        PKR: "150",
      },
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
    <section
      className={`bg-black py-6 relative ${isVisible ? "fade-in-up" : ""}`}
      ref={ref}
    >
      <Heading/>
      <Dropdown2 />
      <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">Lemonade</h2>
      <div className="max-h-[450px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[800px] mx-auto">
          {foodItems.map((item, index) => (
            <article className="flex flex-col items-center" key={index}>
              <h3 className="self-center mt-3 text-xl w-full text-center min-w-[150px]">
                {item.name}
              </h3>
              <div className="self-center mt-2">
                {Object.entries(item.sizes).map(([size, price]) => (
                  <p key={size} className="text-lg w-full flex text-yellow-400 justify-between mt-1">
                    <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                    <span className="ml-2">{price}</span>
                  </p>
                ))}
              </div>
              <OrderButton/>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lemonade ;
