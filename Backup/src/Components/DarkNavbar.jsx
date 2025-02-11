import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

const DarkNavbar = () => {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-10">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Images/logo.svg" className=" h-[43px]" alt="Logo" />
        </a>
        <div className="flex flex-row gap-[16px] text-xl font-bold">
          <img src="/svgIcons/whitePhone.svg" alt="Call Icon" className="cursor-pointer md:w-[25px] w-[17.5px] md:h-[25px] h-[17.5px]" />
          <img src="/svgIcons/whiteNoti-Icon.svg" alt="Notification Icon" className="cursor-pointerpointer md:w-[25px] w-[17.5px] md:h-[25px] h-[17.5px]" />
          <img src="/svgIcons/whiteProfile.svg" alt="Profile Icon" className="cursor-pointerpointer md:w-[25px] w-[17.5px] md:h-[25px] h-[17.5px]" />

        </div>
      </div>
    </nav>
  );
};

export default DarkNavbar;
