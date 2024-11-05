"use client";
import React, { useState, useEffect, useRef } from "react";
import OrderButton from "./OrderButton";

function Icecreamflavours () {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Vanilla",
    },
    {
      name: "Mango",
    },
    {
      name: "Coconut",
    },
    {
      name: "Strawberry",
    },
    {
      name: "Coffee",
    },
    {
      name: "GrillOut Special",
    },
    {
      name: "Chocolate Chip",
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
      <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">Ice-Cream Flavours</h2>
      <div className="max-h-[450px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[800px] mx-auto">
          {foodItems.map((item, index) => (
            <article className="flex flex-col items-center" key={index}>
              <h3 className="self-center mt-3 text-xl w-full text-center min-w-[150px]">
                {item.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Icecreamflavours ;
