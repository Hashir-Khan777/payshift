"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FaRegCircleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./Button";

const ProfileMyItems = ({ cards, headingWhite, headingBlack }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (window) {
      const breakpoint = window.matchMedia("(min-width: 1024px)");
      if (breakpoint.matches) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    }
  }, []);

  return (
    <div
      className="w-[90%] rounded-lg mx-auto py-20 px-16 border-[2px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <h1 className="text-center text-2xl md:text-4xl mb-16 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>

      <div className="flex items-center justify-center mb-4 overflow-hidden">
        <Swiper
          autoplay
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          onSlideChange={(e) => {
            if (e.currentBreakpoint >= 1024) {
              setActiveIndex(e.activeIndex + 1);
            } else {
              setActiveIndex(e.activeIndex);
            }
          }}
        >
          {cards?.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col gap-6  items-start font-lexend shrink-0 w-full py-16 px-6 rounded-md  border-4 border-white${
                  index === activeIndex
                    ? "bg-gradient-to-b from-white to-[#bddcff] shadow-lg my-3"
                    : "bg-white/50 scale-90 opacity-40"
                } transition-transform duration-300`}
                style={{
                  background:
                    "linear-gradient(180deg, #E8F3FF 15.92%, #bddcff 100%)",
                  boxShadow: "0px 0px 20px rgba(146, 168, 255, 1)",
                }}
              >
                {/* ---- Card Content---- */}
                <div className="w-full flex flex-row justify-between items-center gap-10">
                  <p className="font-lexend font-[600] lg:text-[20px]/[25px] text-[17px]/[20px] whitespace-nowrap tracking-[4%] text-[#000000]">
                    {card.category}
                  </p>
                  <p className="font-lexend font-[600] lg:text-[20px]/[25px] text-[17px]/[20px] whitespace-nowrap tracking-[4%] text-[#5EB43B]">
                    {card.tag}
                  </p>
                </div>

                <h1 className="font-lexend font-[600] text-[32px]/[40px] tracking-[4%] text-[#000000]">
                  {card.projectName}
                </h1>

                <div className="flex flex-row w-full justify-between gap-5 items-center ">
                  <p className="w-[30%] flex flex-row gap-2 justify-start items-center">
                    <img
                      src="./svgIcons/location.svg"
                      alt="Location Icon"
                      className="w-[16px] h-[16px]"
                    />
                    <span className="lg:text-[18px]/[20px] md:text-[17px]/[15px] text-[18px]/[20px]  font-[300] font-lexend tracking-[4%]">
                      Dubai
                    </span>
                  </p>

                  <ul className="lg:w-[70%] w-[60%] flex flex-row justify-between items-center gap-3">
                    <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-gray-500 lg:text-[18px]/[20px] md:text-[17px]/[15px] text-[18px]/[20px]  font-[300] font-lexend tracking-[4%] whitespace-nowrap">
                      1400 SQFT
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-gray-500 lg:text-[18px]/[20px] md:text-[17px]/[15px] text-[18px]/[20px] font-[300] font-lexend tracking-[4%] whitespace-nowrap">
                      2BHK, 2BR
                    </li>
                  </ul>
                </div>

                {/* ---- Card Content---- */}

                <div className="w-full flex flex-col gap-8 justify-between">
                  {/* ===== Buttons ==== */}
                  <Link href={card.link || "#"}>
                    <CustomButton>{card.btnText}</CustomButton>
                  </Link>

                  <Link
                    href={`/${card.viewAllLink}`}
                    className="text-center underline"
                  >
                    View all
                  </Link>
                </div>

                {/* ===== Buttons ==== */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-end items-end gap-4 container">
        <button className="text-3xl" aria-label="Scroll Left" ref={prevRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
            src="/svgIcons/slidericonleft.svg"
          />
        </button>
        <button className="text-3xl" aria-label="Scroll Right" ref={nextRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
            src="/svgIcons/slidericon.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileMyItems;
