import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logo">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Board
        </h1>
      </div>

      <div>
        <ul className="hidden md:flex gap-8">
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Companies
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            About
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Contact
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Login
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Register
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute flex flex-col justify-between top-[100px] right-[50px] border bg-blueColor"
        }
      >
        <li className="text-4xl py-3 px-3 text-white">Jobs</li>
        <li className="text-4xl py-3 px-3 text-white">Companies</li>
        <li className="text-4xl py-3 px-3 text-white">About</li>
        <li className="text-4xl py-3 px-3 text-white">Contact</li>
        <li className="text-4xl py-3 px-3 text-white">Blog</li>
        <li className="text-4xl py-3 px-3 text-white">Login</li>
        <li className="text-4xl py-3 px-3 text-white">Register</li>
      </ul>
    </div>
  );
};

export default NavBar;
