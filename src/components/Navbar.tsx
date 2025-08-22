import React from "react";

const Navbar = () => {
  const textStyle: string =
    "text-white hover:border-b-1 hover:text-cyan-300 px-3 py-2";

  return (
    <nav className="bg-transparent fixed top-2 w-full z-50">
      <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-center">
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
        <a className={textStyle} href="#portfolio">
          Portfolio
        </a>
        <a className={textStyle} href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
