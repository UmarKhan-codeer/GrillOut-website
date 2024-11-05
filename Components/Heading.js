import React from 'react';
import { ImFire } from "react-icons/im"; 
import Link from 'next/link';
const Heading = () => {
  return (
    <div className="flex-shrink-0 ml-7 mr-4">
      {/* Link to scroll to the top */}
      <Link href="/home" duration={500} className="cursor-pointer">
        <h1 className="flex text-lg md:text-xl lg:text-2xl font-extrabold text-yellow-500">
          <span className="text-2xl md:text-3xl">G</span>
          <span className="text-white text-lg md:text-xl lg:text-2xl">
            rill<span className="text-yellow-500 text-2xl md:text-3xl">O</span>ut
          </span>
          <ImFire />
        </h1>
      </Link>
    </div>
  );
};

export default Heading;
