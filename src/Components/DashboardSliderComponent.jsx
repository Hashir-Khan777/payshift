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

const DasboardSliderComponent = ({ cards, headingWhite, headingBlack }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    setMounted(true);
    if (prevRef.current && nextRef.current) {
      console.log("Refs initialized:", prevRef.current, nextRef.current);
    }
  }, []);

  return (
    <div
      className="container rounded-lg mx-auto mt-20 py-20 px-1 md:px-16 border-[2px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <h1 className="text-center text-[28px] md:text-5xl mb-6 md:mb-16 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>
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
        style={{ padding: "15px 0" }}
        spaceBetween={24}
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
              className={`font-lexend shrink-0 mx-auto w-[90%] max-w-[310px] sm:max-w-md md:max-w-full py-8 sm:py-12 md:py-16 px-4 sm:px-5 md:px-6 rounded-md border-4 border-white
    ${index === activeIndex
                  ? "bg-gradient-to-b from-white to-[#C2DEFF] shadow-lg my-3"
                  : "bg-white/50 scale-90 opacity-40"
                }
    transition-transform duration-300`}
              style={{
                background: "linear-gradient(180deg, #FFFFFF 16%, #C2DEFF 100%)",
                boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.48)",
              }}
            >
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-base sm:text-lg md:text-2xl font-semibold">
                    {card.title}
                  </h1>
                </div>

                {card.ref_no && (
                  <p className="text-xs sm:text-sm md:text-base font-light mb-8 md:mb-12 bg-purple-300 rounded-xl px-2 py-1 mt-2">
                    DDA Number:{" "}
                    <span className="font-semibold">{card.ref_no}</span>
                  </p>
                )}

                <div className="flex flex-wrap justify-between gap-2 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Date:</p>
                    <p className="text-sm sm:text-base font-semibold text-[#0B1F4B]">
                      {card.date || "12-May-2025"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="text-sm sm:text-base font-semibold text-red-500">
                      {card.status || "Pending"}
                    </p>
                  </div>
                </div>
              </div>

              <Link href={card.link || "#"}>
                <CustomButton
                  btnClass="mx-auto mt-4"
                  textClass="text-sm sm:text-base md:text-xl"
                  iconClass="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                >
                  {"View"}
                </CustomButton>
              </Link>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
      <div className="pe-4 flex justify-end items-end gap-4 container">
        <button className="text-3xl" aria-label="Scroll Left" ref={prevRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px] rotate-180"
            src="/svgIcons/slidericon.svg"
          />
        </button>
        <button className="text-3xl" aria-label="Scroll Right" ref={nextRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
            src="/svgIcons/slidericon.svg"
          />
        </button>
      </div>
      <button
        class=" text-base md:text-ld font-semibold flex items-center justify-center m-auto underline"
      >
        {'View all'}
      </button>
    </div>
  );
};

export default DasboardSliderComponent;
