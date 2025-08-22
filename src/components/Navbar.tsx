import React from "react";

const Navbar = () => {
  const textStyle: string =
    "hidden md:block text-white hover:border-b-1 hover:text-cyan-300 px-3 py-2";

  return (
    <nav className="w-full bg-image-overlay-nav">
      <div className="flex flex-1 items-center justify-center relative z-10 md:items-stretch md:justify-center">
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
    </nav>
  );
};

export default Navbar;
