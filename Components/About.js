"use client"; // Use 'use client' for Next.js components that require client-side rendering
import React from "react";

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-12 bg-white">
      {/* Left Side: Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeInLeft">
        <img
          src="/About_img.png" // Replace with your actual image path
          alt="About GrillOut"
          className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Right Side: Text */}
      <div className="md:w-1/2 md:pl-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-fadeInRight">
          About
          <span className="text-yellow-600"> GrillOut</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6 animate-fadeInRight">
          At GrillOut, we are passionate about serving delicious fast food that satisfies every craving. Our menu is crafted with the freshest ingredients and a variety of options to suit every taste.
        </p>
        <p className="text-lg text-gray-600 mb-6 animate-fadeInRight">
          Whether you're in the mood for juicy burgers, crispy fries, or indulgent shakes, GrillOut has it all. Our commitment to quality and customer satisfaction sets us apart, making every visit a memorable experience.
        </p>
        <p className="text-lg text-gray-600 mb-6 animate-fadeInRight">
        We pride ourselves on using only the freshest ingredients, grilling everything to perfection, and creating a warm, inviting atmosphere where friends and families can gather to enjoy delicious meals together. Whether you're craving something classic or bold, we've got the grill fired up, ready to make your taste buds sizzle
        </p>
      </div>
    </div>
  );
};

export default About;
