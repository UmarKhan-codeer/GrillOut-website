import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Dropdown2 = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage category dropdown visibility
    const [additionalDropdownOpen, setAdditionalDropdownOpen] = useState(false); // State for additional dropdown
    const dropdownRef = useRef(null); // Ref for category dropdown
    const additionalDropdownRef = useRef(null); // Ref for additional dropdown

    const dropdownItems = [
        { name: "Ice-Cream", path: "/icecream" },
        { name: "Ice-Cream Shakes", path: "/icecreamshakes" },
        { name: "Lemonade", path: "/lemonade" },
        { name: "Smoothie", path: "/smoothie" },
        { name: "Sandaes", path: "/sandaes" },
    ];

    const additionalItems = [
        { name: "Fast-Food Station", path: "/fastfood" },
        { name: "Cold Station", path: "/coldstation" },
        { name: "Hot Station", path: "/hotstation" },
    ];

    // Effect to auto-close the category dropdown after 10 seconds
    useEffect(() => {
        let categoryTimeout;
        if (dropdownOpen) {
            categoryTimeout = setTimeout(() => {
                setDropdownOpen(false);
            }, 10000); // Close after 10 seconds
        }
        return () => clearTimeout(categoryTimeout); // Clear timeout when dropdown is closed or unmounted
    }, [dropdownOpen]);

    // Effect to auto-close the additional dropdown after 10 seconds
    useEffect(() => {
        let additionalTimeout;
        if (additionalDropdownOpen) {
            additionalTimeout = setTimeout(() => {
                setAdditionalDropdownOpen(false);
            }, 5000); // Close after 10 seconds
        }
        return () => clearTimeout(additionalTimeout); // Clear timeout when dropdown is closed or unmounted
    }, [additionalDropdownOpen]);

    // Handle click outside to close dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                additionalDropdownRef.current &&
                !additionalDropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
                setAdditionalDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Cleanup the event listener
        };
    }, []);

    return (
        <div className="absolute top-4 right-4 flex space-x-2"> {/* Flex to align buttons */}
            {/* Category Dropdown */}
            <div ref={dropdownRef}>
                <button
                    className="mt-2 px-3 py-1 bg-orange-600 hover:bg-orange-500 transition duration-300 text-white font-bold rounded-lg shadow-lg"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    Category
                </button>

                {/* Dropdown Items */}
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-72 bg-black text-white font-semibold rounded-lg shadow-xl overflow-hidden animate-slide-in transition-transform duration-300 ease-in-out transform origin-top-right">
                        {dropdownItems.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <div
                                    className="block px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-200 cursor-pointer"
                                    onClick={() => setDropdownOpen(false)} // Close dropdown after click
                                >
                                    {item.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Additional Dropdown */}
            <div ref={additionalDropdownRef}>
                <button
                    className="mt-2 px-3 py-1 bg-orange-600 hover:bg-orange-500 transition duration-300 text-white font-bold rounded-lg shadow-lg"
                    onClick={() => setAdditionalDropdownOpen(!additionalDropdownOpen)}
                >
                    Stations
                </button>

                {/* Additional Dropdown Items */}
                {additionalDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-black text-white font-semibold rounded-lg shadow-xl overflow-hidden animate-slide-in transition-transform duration-300 ease-in-out transform origin-top-right">
                        {additionalItems.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <div
                                    className="block px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-200 cursor-pointer"
                                    onClick={() => setAdditionalDropdownOpen(false)} // Close dropdown after click
                                >
                                    {item.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown2;
