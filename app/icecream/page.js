"use client";
import React, { useState, useEffect, useRef } from "react";
import Dropdown2 from "@/Components/Dropdown2";
import Heading from "@/Components/Heading";
import OrderButton from "@/Components/OrderButton";
import Icecreamflavours from "@/Components/Icecreamflavours";


function Ice_Cream() {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const foodItems = [
    {
      name: "Ice Cream",
      sizes: {
        "2 Scoops": "189",
        "3 Scoops": "269",
        "Family Cup": "699",
      },
      image: "/icecream.jpg",
    },
  ];

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

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
        <Dropdown2 />
        <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">
          Ice Cream
        </h2>
        <div className="flex justify-center">
          <article className="flex flex-col items-center">
            <img
              loading="lazy"
              src={foodItems[0].image}
              alt={`Image of ${foodItems[0].name}`}
              className="object-contain rounded-xl aspect-square w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] cursor-pointer"
              onClick={() => handleImageClick(foodItems[0].image)}
            />
            <h3 className="self-center mt-3 text-xl w-full text-center min-w-[120px] text-white font-bold">
              {foodItems[0].name}
            </h3>
            <div className="self-center mt-2 flex justify-between w-full max-w-xs">
              {Object.entries(foodItems[0].sizes).map(([size, price]) => (
                <div key={size} className="flex flex-col text-yellow-400 items-center w-32">
                  <p className="text-lg font-bold">{size}</p>
                  <p className="text-lg font-bold">{price}</p>
                </div>
              ))}
            </div>
            <OrderButton />
          </article>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal}
          >
            <div className="relative">
              <img
                src={modalImage}
                alt="Full view"
                className="max-w-full max-h-screen rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>
      <Icecreamflavours />
    </>
  );
}

export default Ice_Cream;
