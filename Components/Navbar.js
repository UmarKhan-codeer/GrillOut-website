import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { ImFire } from "react-icons/im";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle the dropdown state
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 w-full z-20 flex items-center justify-between px-8 py-3 bg-black backdrop-blur-md shadow-lg">
        {/* GrillOut Logo on the left */}
        <div className="flex-shrink-0">
          <h1
            className="flex text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-500 cursor-pointer"
            onClick={() => scroll.scrollToTop()} // Scroll to the top when clicking on the logo
          >
            <span className="text-4xl md:text-4xl">G</span>
            <span className="text-white text-2xl md:text-3xl lg:text-4xl">
              rill<span className="text-yellow-500 text-3xl md:text-4xl">O</span>ut
            </span>
            <span><ImFire /></span>
          </h1>
        </div>

        {/* Menu Links on the right */}
        <div className="flex-grow flex justify-end mx-4">
          <div className="hidden sm:flex gap-6 md:gap-8 lg:gap-10 items-center text-sm md:text-lg lg:text-xl text-white">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-yellow-500 cursor-pointer font-bold"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              className="hover:text-yellow-500 cursor-pointer font-bold"
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="events"
              smooth={true}
              duration={500}
              className="hover:text-yellow-500 cursor-pointer font-bold"
            >
              Events
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-yellow-500 cursor-pointer font-bold"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-yellow-500 cursor-pointer font-bold"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Dropdown Button for Mobile */}
          <div className="relative">
            <button
              className="text-white sm:hidden hover:text-yellow-500 focus:outline-none transition-transform duration-300"
              onClick={toggleDropdown}
              aria-label="Dropdown Menu"
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white rounded shadow-lg">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-yellow-500 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="menu"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-yellow-500 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  Menu
                </ScrollLink>
                <ScrollLink
                  to="events"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-yellow-500 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  Events
                </ScrollLink>
                
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-yellow-500 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-yellow-500 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  Contact
                </ScrollLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
