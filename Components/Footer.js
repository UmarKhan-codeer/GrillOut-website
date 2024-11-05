import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:text-orange-400 transition-colors duration-300 text-sm md:text-base">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#menu" className="hover:text-orange-400 transition-colors duration-300 text-sm md:text-base">
                Menu
              </a>
            </li>
            <li className="mb-2">
              <a href="#events" className="hover:text-orange-400 transition-colors duration-300 text-sm md:text-base">
                Events
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="hover:text-orange-400 transition-colors duration-300 text-sm md:text-base">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition-colors duration-300 text-sm md:text-base">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Opening Hours</h3>
          <ul>
            <li className="flex justify-between mb-2 text-sm md:text-base">
              <span>Monday - Friday:</span>
              <span>10:00 AM - 12:00 PM</span>
            </li>
            <li className="flex justify-between mb-2 text-sm md:text-base">
              <span>Saturday:</span>
              <span>10:00 AM - 12:00 PM</span>
            </li>
            <li className="flex justify-between text-sm md:text-base">
              <span>Sunday:</span>
              <span>10:00 AM - 12:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/GrillOutHaripur" aria-label="Facebook" className="hover:text-orange-400 transition-colors duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com/grilloutharipur" aria-label="Instagram" className="hover:text-orange-400 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="Whatsapp" className="hover:text-orange-400 transition-colors duration-300">
              <BsWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm md:text-base"> GrillOut Copyright
        © {new Date().getFullYear()} - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


