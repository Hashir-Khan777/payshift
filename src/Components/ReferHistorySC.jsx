"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCircleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ReferHistorySliderComponent = ({ cards, headingWhite, headingBlack }) => {
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

      <div className="flex items-center justify-center mb-4 overflow-hidden rounded">
        <div
          className="hidden md:flex items-center justify-center"
          style={{ width: "-webkit-fill-available" }}
        >
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
                  className={`font-lexend shrink-0 w-[310px] md:w-full py-16 px-3 md:px-6 rounded-md  border-4 border-white
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
                  {/* ============= Card Content ============ */}
                  <div className="flex md:flex-col flex-row md:justify-center justify-between items-center gap-9">
                    <div className="flex flex-row md:justify-center justify-start items-center md:gap-6 gap-2">
                      <div className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] border-2 border-white rounded-full">
                        <img
                          src={card.picture}
                          className="w-full h-full rounded-full object-cover object-center"
                        />
                      </div>

                      <div className="flex flex-col md:gap-2 gap-1">
                        <h3 className="md:text-2xl text-base font-semibold">
                          {card.name}
                        </h3>
                        <p className="md:text-xl font-light text-sm">
                          Invited {card.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-[#290080] md:font-bold font-semibold md:text-2xl text-xl">
                      +AED {card.amount}
                    </p>
                  </div>

                  {/* ============= Card Content ============ */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div classname="block md:hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`block md:hidden font-lexend shrink-0 p-4 w-full rounded-md  border-4 border-white
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
              <div className="flex md:flex-col flex-row md:justify-center justify-between items-center gap-9">
                <div className="flex flex-row md:justify-center justify-start items-center md:gap-6 gap-2">
                  <div className="md:w-[160px] w-[48px] h-[48px] md:h-[160px] border-2 border-white rounded-full">
                    <img
                      src={card.picture}
                      className="w-full h-full rounded-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col md:gap-2 gap-1">
                    <h3 className="text-xs md:text-2xl font-semibold">
                      {card.name}
                    </h3>
                    <p className="md:text-xl font-light text-xs">
                      Invited {card.date}
                    </p>
                  </div>
                </div>

                <p className="text-[#290080] md:font-bold font-semibold text-xs md:text-2xl">
                  +AED {card.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pe-4 justify-end items-end gap-4 container hidden md:flex">
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

export default ReferHistorySliderComponent;
