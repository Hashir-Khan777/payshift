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
      className="container my-10 rounded-sm mx-auto  py-20 px-5 md:px-16 border-[2px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <div className="flex items-center justify-center mb-4 overflow-hidden rounded">
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
                className={`font-lexend shrink-0 w-full py-16 px-3 md:px-6 rounded-md  border-4 border-white
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
                {/* ========= Content  ============ */}
                <div>
                  {/* Propert Id and heading start */}
                  <div className="flex flex-col gap-[12px]">
                    {card.propertyId ? (
                      <div className="mb-3 flex items-center gap-2 text-[10px] md:text-base font-bold bg-[#D1BCFF] rounded-full px-5 py-2 mt-3 sm:w-full md:w-[60%]">
                        <div className="w-[12px] h-[12px] bg-[#A786F0] rounded-full"></div>
                        <div>
                          <span>Property ID:</span>
                          <span className="font-bold">{card.propertyId}</span>
                        </div>
                      </div>
                    ) : null}

                    <h1 className="text-base md:text-2xl font-semibold">
                      {card.title}
                    </h1>
                  </div>

                  {/* Propert Id and heading end */}

                  <div>
                    {card.payment ? (
                      <p className="font-bold text-xl md:text-[32px] text-center mb-5 mt-9">
                        AED {card.amount}
                      </p>
                    ) : null}

                    {card.payment || card.appointment ? (
                      <div
                        className={`flex flex-row md:gap-[12px]  gap-[8px] text-xl items-center justify-center w-full 
                                            ${
                                              card.alertType === "success"
                                                ? "text-[#17A900]"
                                                : ""
                                            } 
                                            ${
                                              card.alertType === "danger"
                                                ? "text-[#F93434]"
                                                : ""
                                            }  
                                            ${
                                              card.alertType === "safe"
                                                ? "text-gray-500"
                                                : ""
                                            }  
                                                font-semibold`}
                      >
                        {card.alertType === "danger" ? (
                          <img
                            src="/svgIcons/err.svg"
                            alt=""
                            className="md:w-[24px] md:h-[24px] w-[11px] h-[10px]"
                          />
                        ) : null}

                        <h1
                          className={`${
                            index === activeIndex
                              ? "md:text-[22px]"
                              : "md:text-[14px]"
                          } text-[12px]/[15px] ${
                            index === activeIndex ? "font-bold" : "font-light"
                          }`}
                        >
                          {card.alert}
                        </h1>
                      </div>
                    ) : null}
                  </div>

                  <p className="font-lexend font-light md:text-[20px] text-[12px] my-0 py-0 mt-[40px] mb-[52px]">
                    {card.info}
                  </p>
                </div>

                {/* ========= Content  ============ */}

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

      <div className="w-full flex justify-center items-center gap-4 container mt-16">
        <button className="text-3xl" aria-label="Scroll Left" ref={prevRef}>
          <img
            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
            src="/svgIcons/slidericonleft.svg"
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
    </div>
  );
};

export default PendingPSliderComponent;
