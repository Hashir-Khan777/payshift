"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./Button";

const ServiceSliderComponent = ({ cards, headingWhite, headingBlack }) => {
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
      className="container rounded-lg mx-auto mt-20 py-20 px-5 md:px-16 border-[4px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <h1 className="text-center text-[28px] md:text-5xl mb-6 md:mb-16 font-medium font-cashdisplay">
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
                className={`font-lexend shrink-0 mx-auto w-[270px] md:w-full py-16 px-3 md:px-6 rounded-md  border-4 border-white
                ${
                  index === activeIndex
                    ? "bg-gradient-to-b from-white to-[#C2DEFF] shadow-lg my-3"
                    : "bg-white/50 scale-90 opacity-40"
                }
              transition-transform duration-300`}
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 16%, #C2DEFF 100%)",
                  boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.48)",
                }}
              >
                {/* ---- Card Content---- */}
                <div>
                  <div className="flex items-center">
                    <h1 className="text-lg md:text-2xl basis-[70%] font-semibold">
                      {card.title}
                    </h1>
                    {card.showMoreInfo && (
                      <Link
                        href="/"
                        className="text-black text-xs md:text-lg underline font-normal"
                      >
                        More Info
                      </Link>
                    )}
                  </div>

                  <p className="text-xs md:text-xl font-light mt-[40px] mb-[52px]">
                    {card.info}
                  </p>
                </div>

                <CustomButton
                  textClass="md:text-xl"
                  btnClass="mx-auto"
                  iconClass="md:w-[32px] md:h-[32px]"
                >
                  {card.btnText}
                </CustomButton>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pe-6 flex justify-end items-end gap-4 container">
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
    </div>
  );
};

export default ServiceSliderComponent;
