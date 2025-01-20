"use client";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import React from "react";
import { useState, useEffect } from "react";
import HomeTab from "./HomeTab";
import Properties from "./Properties";
import MakePaymentTab from "./MakePaymentTab";
import ReferFriendTab from "./ReferFriendTab";
import ServicesTab from "./ServicesTab";
import RegisterInterestTab from "./RegisterInterestTab";

const MenuSection = () => {
  // For toggle between tabs
  const cards = [
    { id: 1, title: "Home" },
    { id: 2, title: "Services" },
    { id: 3, title: "My Properties" },
    { id: 4, title: "Make A Payment" },
    { id: 5, title: "Register Interest" },
    { id: 6, title: "Refer a Friend" },
  ];

  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTab = localStorage.getItem("activeTab");
      if (storedTab) {
        setActiveTab(storedTab);
      }
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTab", tab);
    }
  };
  return (
    <div
      className="py-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(125, 184, 255, 0.64) 0%, #FFF 100%)",
      }}
    >
      <div className="container mx-auto px-3">
        {/* MenuTabs Start */}
        <div
          className="flex items-center justify-start gap-4 md:gap-14 mb-4 overflow-hidden"
          style={{ marginTop: "4rem" }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleTabClick(card.title)}
              className={`shrink-0 w-[250px] h-20 flex items-center justify-center shadow-lg cursor-pointer ${activeTab === card.title
                ? "bg-gradient-to-b from-white to-[#96a7e8] border border-white cursor-pointer"
                : "bg-white/50"
                } hover:scale-105 transition-transform duration-300`}
            >
              <span
                className={`cursor-pointer text-lg font-btnText font-medium ${activeTab === card.title ? "text-black" : "text-gray-500"
                  }`}
              >
                {card.title}
              </span>
            </div>
          ))}


        </div>
        {/* MenuTabs End */}


        <div className="flex justify-end items-end gap-4 container">
          <button className="text-3xl" aria-label="Scroll Left">
            <FaRegArrowAltCircleLeft />
          </button>
          <button className="text-3xl" aria-label="Scroll Right">
            <FaRegArrowAltCircleRight />
          </button>
        </div>


        {/* Render Tab Content */}

        {activeTab === "Home" && <HomeTab />}
        {activeTab === "Services" && <ServicesTab />}
        {activeTab === "My Properties" && <Properties />}
        {activeTab === "Make A Payment" && <MakePaymentTab />}
        {activeTab === "Register Interest" && <RegisterInterestTab />}
        {activeTab === "Refer a Friend" && <ReferFriendTab />}
      </div>
    </div>
  );
};

export default MenuSection;
