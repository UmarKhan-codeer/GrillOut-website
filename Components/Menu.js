import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Menu = () => {
  const menuRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndexes, setCurrentIndexes] = useState(Array(6).fill(0)); // State for current indexes of each menu item
  const [opacities, setOpacities] = useState(Array(6).fill(1)); // For image fading

  const menuItems = [
    {
      title: "Pizza",
      images: ["/pizzaassets/crowncrust.jpg", "/pizzaassets/squarepizza.jpg", "/pizzaassets/stuffcrust.jpg"],
      delay: 4500,
      link: "/pizza", // Add a link for each menu item
    },
    {
      title: "Burgers",
      images: ["/burgerassets/bazinga.jpg", "/burgerassets/flango.jpg", "/burgerassets/zooper.jpg"],
      delay: 3500,
      link: "/burger", // Add a link for each menu item
    },
    {
      title: "Pasta",
      images: ["/pastaassets/crunchy.jpg", "/pastaassets/lasagnea.jpg", "/pastaassets/alfredo.jpg"],
      delay: 4500,
      link: "/pasta", // Add a link for each menu item
    },
    {
      title: "Wings",
      images: ["/wingsassets/friedwings.jpg", "/wingsassets/honeywings.jpg", "/wingsassets/periwings.jpg"],
      delay: 3500,
      link: "/chickencorner", // Add a link for each menu item
    },
    {
      title: "Rice",
      images: ["/riceassets/masalarice.jpg", "/riceassets/beefrice.jpg", "/riceassets/chillidryrice.png"],
      delay: 4600,
      link: "/rice", // Add a link for each menu item
    },
    {
      title: "Appetizers",
      images: ["/appetizerassets/frenchfries.jpg", "/appetizerassets/nuggets.jpg", "/appetizerassets/calzone.jpg"],
      delay: 2700,
      link: "/appetizer", // Add a link for each menu item
    },
  ];

  // Handle image transitions for each menu item
  const handleImageTransition = (index) => {
    // First, fade out the current image by setting opacity to 0
    setOpacities((prevOpacities) => {
      const newOpacities = [...prevOpacities];
      newOpacities[index] = 0;
      return newOpacities;
    });

    // Wait for the fade-out to complete before changing the image
    setTimeout(() => {
      // Change the current image index
      setCurrentIndexes((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[index] = (newIndexes[index] + 1) % menuItems[index].images.length;
        return newIndexes;
      });

      // Then, fade in the new image by setting opacity back to 1
      setOpacities((prevOpacities) => {
        const newOpacities = [...prevOpacities];
        newOpacities[index] = 1;
        return newOpacities;
      });
    }, 400); // This timeout should match the duration of the fade-out transition
  };

  // Effect for changing images based on delay for each item
  useEffect(() => {
    const intervals = menuItems.map((item, index) =>
      setInterval(() => handleImageTransition(index), item.delay)
    );

    return () => intervals.forEach(clearInterval); // Cleanup intervals on unmount
  }, []);

  // Intersection Observer for visibility animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, []);

  return (
    <div id="menu" className="bg-white text-black py-8" ref={menuRef}>
      <div
        className={`max-w-7xl mx-auto px-4 transform transition-transform duration-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Our
          <span className="text-yellow-600"> Menu</span>
        </h2>

        {/* Grid Layout Adjustments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-8">
          {menuItems.map((item, index) => (
            <Link href={item.link} key={index}> {/* Use dynamic link based on menu item */}
              <div
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                style={{ height: '100%' }} // Ensures consistent height
              >
                {/* Adjusted Image Height for different screen sizes */}
                <img
                  src={item.images[currentIndexes[index]]}
                  alt={item.title}
                  className="w-full h-48 md:h-64 lg:h-80 object-cover transition-opacity duration-500"
                  style={{ opacity: opacities[index] }} // Control opacity for fading effect
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-center text-white">{item.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Learn More Button at the bottom */}
        <div className="flex justify-center mt-8">
          <Link href="/pizza"> {/* A general link to explore the full menu */}
            <button
              type="button"
              className="bg-black text-white font-bold rounded-full px-6 py-3 transition duration-300 hover:bg-yellow-600"
            >
              Explore Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
