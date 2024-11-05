"use client";
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import OrderButton from "./OrderButton";

function Wings() {
    const [modalImage, setModalImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const foodItems = [
        {   
        name: "Fried Wings",
      sizes: {
        "5 Pcs": "419",
        "10 Pcs": "769",
      },
      image: "/wingsassets/friedwings.jpg",
    },
        {   
        name: "Honey Wings",
      sizes: {
        "5 Pcs": "469",
        "10 Pcs": "829",
      },
      image: "/wingsassets/honeywings.jpg",
    },
        {   
        name: "Grilled Wings",
      sizes: {
        "5 Pcs": "369",
        "10 Pcs": "619",
      },
      image: "/wingsassets/grilledwings.jpg",
    },
        {   
        name: "Peri Peri Wings",
      sizes: {
        "5 Pcs": "449",
        "10 Pcs": "849",
      },
      image: "/wingsassets/periwings.jpg",
    },
        {   
        name: "BBQ Wings",
      sizes: {
        "5 Pcs": "449",
        "10 Pcs": "799",
      },
      image: "/wingsassets/bbqwings.jpg",
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
        <section
            className={`bg-black  relative ${isVisible ? "fade-in-up" : ""}`}
            ref={ref}
        >
            
            
            <h2 className="text-2xl pt-10 pb-4 font-extrabold text-white text-center mb-4">Chicken Wings</h2>
            <div className="max-h-[450px]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 w-full text-xs font-extrabold text-white max-w-[800px] mx-auto">
                    {foodItems.map((item, index) => (
                        <article className="flex flex-col items-center" key={index}>
                            <img
                                loading="lazy"
                                src={item.image}
                                alt={`Image of ${item.name}`}
                                className="object-contain rounded-xl aspect-square w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] cursor-pointer"
                                onClick={() => handleImageClick(item.image)}
                            />
                            <h3 className="self-center mt-3 text-xl w-full text-center min-w-[120px]">
                                {item.name}
                            </h3>
                            <div className="self-center mt-2">
                                {Object.entries(item.sizes).map(([size, price]) => (
                                    <p key={size} className="text-lg w-full text-yellow-400 flex justify-between mt-1">
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
    );
}

export default Wings;
