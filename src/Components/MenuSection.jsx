"use client";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import HomeTab from "./HomeTab";
import Properties from "./Properties";
import MakePaymentTab from "./MakePaymentTab";
import ReferFriendTab from "./ReferFriendTab";
import ServicesTab from "./ServicesTab";
import RegisterInterestTab from "./RegisterInterestTab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    <section
      // className="flex flex-col"
      style={{
        background:
          "linear-gradient(90deg, rgba(125, 184, 255, 0.64) 0%, #FFF 100%)",
      }}
    >
      <div className="tabs-container mx-2 pt-8 pb-6">
        <div className="container mx-auto">
          {/* MenuTabs Start */}
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 6,
              },
              320: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={24}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            style={{ marginTop: "4rem" }}
          >
            {cards.map((card) => (
              <SwiperSlide className="w-max" style={{ width: "max-content" }}>
                <div
                  key={card.id}
                  onClick={() => handleTabClick(card.title)}
                  style={{ boxShadow: "0px 4.8px 12px 0px #0045C566" }}
                  className={`w-max shrink-0 px-10 h-20 flex items-center justify-center cursor-pointer rounded-[4px] ${
                    activeTab === card.title
                      ? "mx-3 my-2 h-24 bg-gradient-to-b from-white to-[#96a7e8] border-white border-[2px] cursor-pointer transform scale-110 transition-transform duration-300"
                      : "bg-custom-gradient mx-2"
                  } hover:scale-[1.05] transition-transform duration-300`}
                >
                  <span
                    className={`cursor-pointer text-lg font-btnText font-medium ${
                      activeTab === card.title ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {card.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* MenuTabs End */}

          <div className="flex justify-end items-end gap-4 container">
            <button ref={prevRef} className="text-3xl" aria-label="Scroll Left">
              <img
                className="w-[48px] h-[48px]"
                src="/svgIcons/slidericonleft.svg"
              />
            </button>
            <button
              ref={nextRef}
              className="text-3xl"
              aria-label="Scroll Right"
            >
              <img
                className="w-[48px] h-[48px]"
                src="/svgIcons/slidericon.svg"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Render Tab Content */}
      <div className="mx-1 pb-20">
        {activeTab === "Home" && <HomeTab />}
        {activeTab === "Services" && <ServicesTab />}
        {activeTab === "My Properties" && <Properties />}
        {activeTab === "Make A Payment" && <MakePaymentTab />}
        {activeTab === "Register Interest" && <RegisterInterestTab />}
        {activeTab === "Refer a Friend" && <ReferFriendTab />}
      </div>
    </section>
  );
};

export default MenuSection;
