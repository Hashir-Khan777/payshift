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
import {
  AiFillHome,
  AiOutlineCreditCard,
  AiOutlineBook,
} from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import PaymentHomeTab from "./PaymentHomeTab";
import DashboardTab from "./DashboardTab";

const PaymentSection = ({ activePaymentTab, setPaymentActiveTab }) => {
  // For toggle between tabs
  const cards = [
    { id: 1, title: "Home", icon: <AiFillHome size={24} /> },
    { id: 2, title: "New direct debit", icon: <BsFillPlusCircleFill size={24} /> },
    { id: 3, title: "Direct debit", icon: <AiOutlineCreditCard size={24} /> },
    { id: 4, title: "Payments", icon: <FaHandHoldingUsd size={24} /> },
    { id: 5, title: "Daybook", icon: <AiOutlineBook size={24} /> },
    { id: 6, title: "Dashboard", icon: <MdOutlineDashboard size={24} /> },
  ];

  const [mounted, setMounted] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTab = localStorage.getItem("activePaymentTab");
      if (storedTab) {
        setPaymentActiveTab(storedTab);
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    if (prevRef.current && nextRef.current) {
      console.log("Refs initialized:", prevRef.current, nextRef.current);
    }
  }, []);

  const handleTabClick = (tab) => {
    setPaymentActiveTab(tab);
    if (typeof window !== "undefined") {
      localStorage.setItem("activePaymentTab", tab);
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
            slidesPerView={"auto"}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            style={{ marginTop: "4rem", padding: "15px 0" }}
          >
            {cards.map((card) => (
              <SwiperSlide>
                <div
                  key={card.id}
                  onClick={() => handleTabClick(card.title)}
                  style={{ boxShadow: "0px 4.8px 12px 0px #0045C566" }}
                  className={`w-max shrink-0 ml-8 px-10 h-20 flex flex-col items-center justify-center cursor-pointer rounded-[4px] ${activePaymentTab === card.title
                    ? "mx-3 my-2 h-26 bg-gradient-to-b from-white to-[#96a7e8] border-white border-[2px] cursor-pointer transform scale-110 transition-transform duration-300"
                    : "bg-custom-gradient mx-2 gap-2"
                    } hover:scale-[1.05] transition-transform duration-300`}
                >
                  <div className={`mb-1 my-2 ${activePaymentTab === card.title ? "text-black" : "text-gray-400"}`}>
                    {card.icon}
                  </div>
                  <span
                    className={`cursor-pointer mb-2 text-lg font-btnText font-medium ${activePaymentTab === card.title ? "text-black" : "text-gray-400"
                      }`}
                  >
                    {card.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* MenuTabs End */}

          <div className="slider-btn hidden justify-end items-end gap-4 container mt-3 md:mt-10 pr-2">
            <button ref={prevRef} className="text-3xl" aria-label="Scroll Left">
              <img
                className="w-[48px] h-[48px] rotate-180"
                src="/svgIcons/slidericon.svg"
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
      <div className="mx-4 md:mx-1 pb-20">
        {activePaymentTab === "Home" && <PaymentHomeTab
        />}
        {activePaymentTab === "New direct debit" && <HomeTab />}
        {activePaymentTab === "Direct debit" && <DashboardTab />}
        {activePaymentTab === "Payments" && <MakePaymentTab />}
        {activePaymentTab === "Daybook" && <RegisterInterestTab />}
        {activePaymentTab === "Dashboard" && <DashboardTab />}
      </div>
    </section>
  );
};

export default PaymentSection;
