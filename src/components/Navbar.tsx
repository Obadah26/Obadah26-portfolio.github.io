import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const textStyle =
    "hidden md:block text-white hover:border-b-1 hover:text-cyan-300 px-3 py-2";

  return (
    <nav className="w-full bg-image-overlay-nav">
      <div className="container mx-auto flex justify-center md:justify-evenly items-center py-4 relative z-20">
        <img src={logo} alt="Logo" className="h-10" />
        {/* Navigation Links */}
        <div className="flex items-center">
          <a className={textStyle} href="#home">
            Home
          </a>
          <a className={textStyle} href="#about">
            About
          </a>
          <a className={textStyle} href="#skills">
            Skills
          </a>
          <a className={textStyle} href="#services">
            Services
          </a>
          <a className={textStyle} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
