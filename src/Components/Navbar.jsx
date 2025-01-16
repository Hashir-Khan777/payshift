import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Images/logo.png" className="h-8" alt="Logo" />
        </a>
        <div className="flex gap-4 text-xl">
          <FaPhoneAlt />
          <IoIosNotifications />
          <RiContactsFill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
