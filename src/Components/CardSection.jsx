"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  FaFileAlt,
  FaTools,
  FaHome,
  FaCalendarAlt,
  FaHeadphonesAlt,
  FaUserFriends,
} from "react-icons/fa";

const CardSection = ({ setActiveTab }) => {
  const router = useRouter();

  const cards = [
    {
      title: "Requests",
      func: () => {
        router.push("/my-request");
      },
      icon: (
        <img
          src="/svgIcons/file.svg"
          alt="Call Icon"
          className="cursor-pointer w-[28px] h-[28px]]"
        />
      ),
    },
    {
      title: "Services",
      func: () => {
        setActiveTab("Services");
        if (typeof window !== "undefined") {
          localStorage.setItem("activeTab", "Services");
        }
      },
      icon: (
        <img
          src="/svgIcons/service.svg"
          alt="Call Icon"
          className="cursor-pointer w-[28px] h-[28px]"
        />
      ),
    },
    {
      title: "Properties",
      func: () => {
        setActiveTab("My Properties");
        if (typeof window !== "undefined") {
          localStorage.setItem("activeTab", "My Properties");
        }
      },
      icon: (
        <img
          src="/svgIcons/property.svg"
          alt="Call Icon"
          className="cursor-pointer w-[28px] h-[28px]"
        />
      ),
    },
    {
      title: "Appointments",
      func: () => {
        localStorage.setItem("activeTab", "Home");
        router.push("#appointments");
      },
      icon: (
        <img
          src="/svgIcons/appointment.svg"
          alt="Call Icon"
          className="cursor-pointer w-[28px] h-[28px]"
        />
      ),
    },
    {
      func: () => {
        router.push("#contact");
      },
      title: "Support",
      icon: (
        <img
          src="/svgIcons/support.svg"
          alt="Call Icon"
          className="cursor-pointer w-[28px] h-[28px]"
        />
      ),
    },
    {
      title: "Refer",
      func: () => {
        setActiveTab("Refer a Friend");
        if (typeof window !== "undefined") {
          localStorage.setItem("activeTab", "Refer a Friend");
        }
      },
      icon: (
        <img
          src="/svgIcons/referFriend.svg"
          alt="Call Icon"
          className="cursor-pointer w-[28px] h-[28px]"
        />
      ),
    },
  ];

  return (
    <div
      className="h-[320px] lg:h-[232px] relative bg-cover bg-center flex flex-row justify-center items-center"
      style={{
        backgroundImage: `url(/Images/sectionbg.png)`,
        objectFit: "cover",
        backgroundSize: "200% 170%",
      }}
    >
      {/* <div className="absolute inset-0"></div> */}

      <div className="z-10 container grid grid-cols-3 lg:grid-cols-6 py-5 px-2 md:w-[80vw] w-[90vw] sm:w-full md:gap-5 gap-2 overflow-hidden">
        {cards.map((card, index) => (
          <div
            onClick={() => card.func()}
            key={index}
            className="bg-gradient-to-b from-white to-[#C2DEFF] shadow-xl cursor-pointer backdrop-blur-md rounded-sm flex flex-col items-center justify-center gap-2 text-center hover:scale-105 transition-transform duration-300 py-8 px-7"
          >
            <div className="">{card.icon}</div>
            <h3 className="text-[12px] md:text-[15px] font-medium font-lexend text-[#030055]">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
