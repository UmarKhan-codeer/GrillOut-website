import React from 'react';
import { Link as ScrollLink } from "react-scroll";

export default function Background() {
  return (
    <>
      <div id="home" className="relative h-screen overflow-hidden w-full">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/mainbackgroundvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center h-full w-full px-0 sm:px-4 lg:px-8">
          <div className="text-white text-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
              Welcome To The <span className="text-yellow-500">GrillOut</span> Restaurant
            </h1>
            <ScrollLink
              to="about" // The id of the About section
              smooth={true}
              duration={500}
            >
              <button
                type="button"
                className="text-white bg-yellow-600 hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-full md:text-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
              >
                About Us
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}
