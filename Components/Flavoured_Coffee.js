"use client";
import React, { useState, useEffect, useRef } from "react";
import OrderButton from "./OrderButton";

function Flavoured_Coffee () {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Vanilla Latte",
      sizes: {
        PKR: "450",
      },
    },
    {
      name: "Caramel Latte",
      sizes: {
        PKR: "450",
      },
    },
    {
      name: "Hot Chocolate",
      sizes: {
        PKR: "450",
      },
    },
    {
      name: "Cafe Mocha",
      sizes: {
        PKR: "500",
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
      className={`bg-black relative ${isVisible ? "fade-in-up" : ""}`}
      ref={ref}
    >
      <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">Flavoured Coffee</h2>
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

export default Flavoured_Coffee ;
