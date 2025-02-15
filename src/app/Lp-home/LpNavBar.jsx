import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

const LpNavbar = () => {
  return (
    <nav className="bg-white w-full z-50 top-0 start-0 drop-shadow-lg">
      <div className="container h-[100px] flex flex-wrap items-center px-5 md:px-0 justify-between mx-auto py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/Images/logo.svg" className=" h-[40px]" alt="Logo" />
        </Link>
        <div className="flex flex-row gap-2 text-xl font-bold">
          <Link href="tel:+971502464747" className="cursor-pointer w-[30px]">
            <img
              src="/svgIcons/call.svg"
              alt="Call Icon"
              className="cursor-pointer w-full h-full"
            />
          </Link>
          <img
            src="/svgIcons/notification.svg"
            alt="Notification Icon"
            className="cursor-pointer w-[30px]"
          />
          <Link href="/customer-profile">
            <img
              src="/svgIcons/profile.svg"
              alt="Profile Icon"
              className="cursor-pointer w-[30px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LpNavbar;
