"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./Button";

const PendingPSliderComponent = ({ cards, headingWhite, headingBlack }) => {
  // const router = useRouter();
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
      className="container my-10 rounded-sm mx-auto  py-20 px-5 md:px-16 border-[2px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <div className="flex items-center justify-center mb-4 overflow-hidden rounded">
        <div
          className="md:block hidden"
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
                  className={`font-lexend shrink-0 mx-auto md:w-full py-16 px-3 md:px-6 rounded-md  border-4 border-white
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
                  {/* Propert Id and heading start */}
                  <div className="flex flex-col gap-3">
                    {card.propertyId ? (
                      <p className="flex items-center gap-2 text-[10px] md:text-base font-bold bg-[#D1BCFF] rounded-full px-[10px] py-1 md:px-5 md:py-2 md:mt-3 md:w-[225px] w-[162px]">
                        <div className="w-[12px] h-[12px] bg-[#A786F0] rounded-full"></div>
                        <p className="text-xs md:text-base font-medium">
                          Property ID:{" "}
                          <span className="font-semibold text-xs md:text-base">
                            {card.propertyId}
                          </span>
                        </p>
                      </p>
                    ) : null}

                    <h1 className="text-lg md:text-2xl font-semibold">
                      {card.title}
                    </h1>
                  </div>

                  {/* Propert Id and heading end */}

                  <div className="flex flex-col gap-2 my-[10px] md:my-9">
                    {card.payment ? (
                      <p className="font-semibold md:font-bold text-2xl md:text-3xl text-center">
                        AED {card.amount}
                      </p>
                    ) : null}

                    {card.payment || card.appointment ? (
                      <div
                        className={`flex gap-3 text-xl items-center justify-center w-full ${
                          card.alertType === "success"
                            ? "text-[#17A900]"
                            : "text-[#F93434]"
                        } font-semibold`}
                      >
                        {card.alertType === "danger" ? (
                          <svg
                            viewBox="0 0 27 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[20px] h-[20px] md:w-[27px] md:h-[22px]"
                          >
                            <path
                              d="M11.0809 1.92012C12.1561 0.026628 14.844 0.0266264 15.9192 1.92012L26.3216 20.2396C27.3968 22.1331 26.0528 24.5 23.9025 24.5H3.09763C0.94726 24.5 -0.396723 22.1331 0.678463 20.2396L11.0809 1.92012Z"
                              fill="#F93434"
                            />
                            <path
                              d="M15.0296 16.7564H11.9702C11.9702 15.088 11.5447 10.5915 11.5447 9.02483V7.60059H15.4551V9.02483C15.4551 10.5915 15.0296 15.1084 15.0296 16.7564ZM15.2323 21.2326H11.7675V17.9162H15.2323V21.2326Z"
                              fill="white"
                            />
                          </svg>
                        ) : null}

                        <h1 className="text-[18px] md:text-[22px] font-bold">
                          {card.alert}
                        </h1>
                      </div>
                    ) : null}
                  </div>

                  <p className="md:text-xl text-xs font-light my-0 mb-6 md:mb-12">
                    {card.info}
                  </p>

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
        <div className="md:hidden block">
          <Swiper
            direction="vertical"
            autoplay
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              320: {
                slidesPerView: 3,
              },
            }}
            style={{ padding: "15px 0", height: "1350px" }}
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
              <SwiperSlide style={{ margin: "0 0 25px 0" }} key={index}>
                <div
                  className={`font-lexend shrink-0 mx-auto md:w-full py-16 px-3 md:px-6 rounded-md  border-4 border-white
           transition-transform duration-300`}
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 16%, #C2DEFF 100%)",
                    boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.48)",
                  }}
                >
                  {/* Propert Id and heading start */}
                  <div className="flex flex-col gap-3">
                    {card.propertyId ? (
                      <p className="flex items-center gap-2 text-[10px] md:text-base font-bold bg-[#D1BCFF] rounded-full px-[10px] py-1 md:px-5 md:py-2 md:mt-3 md:w-[225px] w-[162px]">
                        <div className="w-[12px] h-[12px] bg-[#A786F0] rounded-full"></div>
                        <p className="text-xs md:text-base font-medium">
                          Property ID:{" "}
                          <span className="font-semibold text-xs md:text-base">
                            {card.propertyId}
                          </span>
                        </p>
                      </p>
                    ) : null}

                    <h1 className="text-lg md:text-2xl font-semibold">
                      {card.title}
                    </h1>
                  </div>

                  {/* Propert Id and heading end */}

                  <div className="flex flex-col gap-2 my-[10px] md:my-9">
                    {card.payment ? (
                      <p className="font-semibold md:font-bold text-2xl md:text-3xl text-center">
                        AED {card.amount}
                      </p>
                    ) : null}

                    {card.payment || card.appointment ? (
                      <div
                        className={`flex gap-3 text-xl items-center justify-center w-full ${
                          card.alertType === "success"
                            ? "text-[#17A900]"
                            : "text-[#F93434]"
                        } font-semibold`}
                      >
                        {card.alertType === "danger" ? (
                          <svg
                            viewBox="0 0 27 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[20px] h-[20px] md:w-[27px] md:h-[22px]"
                          >
                            <path
                              d="M11.0809 1.92012C12.1561 0.026628 14.844 0.0266264 15.9192 1.92012L26.3216 20.2396C27.3968 22.1331 26.0528 24.5 23.9025 24.5H3.09763C0.94726 24.5 -0.396723 22.1331 0.678463 20.2396L11.0809 1.92012Z"
                              fill="#F93434"
                            />
                            <path
                              d="M15.0296 16.7564H11.9702C11.9702 15.088 11.5447 10.5915 11.5447 9.02483V7.60059H15.4551V9.02483C15.4551 10.5915 15.0296 15.1084 15.0296 16.7564ZM15.2323 21.2326H11.7675V17.9162H15.2323V21.2326Z"
                              fill="white"
                            />
                          </svg>
                        ) : null}

                        <h1 className="text-[18px] md:text-[22px] font-bold">
                          {card.alert}
                        </h1>
                      </div>
                    ) : null}
                  </div>

                  <p className="md:text-xl text-xs font-light my-0 mb-6 md:mb-12">
                    {card.info}
                  </p>

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
      </div>

      <div className="hidden md:flex w-full justify-center items-center gap-4 container mt-16">
        <button className="text-3xl" aria-label="Scroll Left" ref={prevRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px] rotate-180"
            src="/svgIcons/slidericon.svg"
          />
        </button>
        <p className="md:text-[20px]/[25px] font-[500] font-lexend">
          Showing 3/6 Results
        </p>
        <button className="text-3xl" aria-label="Scroll Right" ref={nextRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
            src="/svgIcons/slidericon.svg"
          />
        </button>
      </div>

      <div className="flex md:hidden w-full justify-between items-center gap-4 container mt-16">
        <div>
          <p className="md:text-[20px]/[25px] text-[12px] font-[500] font-lexend">
            Showing 3/6 Results
          </p>
        </div>
        <div className="flex gap-2 items-center">
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
    </div>
  );
};

export default PendingPSliderComponent;
