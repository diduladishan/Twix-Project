import React, { useState } from "react";
import "./navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-[64px] lucky-guy-font">
          <p>$TWIX</p>
        </div>

        <div className="hidden md:flex justify-center flex-grow space-x-20 lucky-guy-font text-[40px]">
          <a href="/buy-now" className="text-white hover:text-gray-400">
            Buy Now
          </a>
          <a href="/buy-now" className="text-white hover:text-gray-400">
            How to Buy
          </a>
          <a href="/buy-now" className="text-white hover:text-gray-400">
            Contact
          </a>
          <a href="/buy-now" className="text-white hover:text-gray-400">
            About
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a href="/buy-now" className="block text-white hover:text-gray-400 p-2">
          Buy Now
        </a>
        <a href="/buy-now" className="block text-white hover:text-gray-400 p-2">
          How to Buy
        </a>
        <a href="/buy-now" className="block text-white hover:text-gray-400 p-2">
          Contact
        </a>
        <a href="/buy-now" className="block text-white hover:text-gray-400 p-2">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
