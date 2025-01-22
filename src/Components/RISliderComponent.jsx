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

const RISliderComponent = ({
  cards,
  headingWhite,
  headingBlack,
  categories,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  // const [activeLink, setActiveLink] = useState("All");

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
      className="container mx-auto mt-20 py-20 px-5 md:px-16"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <h1 className="text-center text-3xl md:text-5xl mb-16 font-medium">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>

      {/* ========= Navbar ============ */}

      <nav className="bg-[#FFFFFF66] text-black text-base font-semibold flex flex-row gap-10 justify-center items-center mx-auto h-[70px]">
        {categories?.map((item) => (
          <Link key={item.id} href="/" className="">
            {item.cat}
          </Link>
        ))}
      </nav>

      {/* ========= Navbar ============ */}

      <div className="flex items-center justify-center mb-4 overflow-hidden">
        <Swiper
          autoplay
          breakpoints={{
            1024: {
              slidesPerView: 1,
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
              setActiveIndex(e.activeIndex);
            } else {
              setActiveIndex(e.activeIndex);
            }
          }}
        >
          {cards?.map((card, index) => (
            <SwiperSlide key={index}>
              {/* === Container === */}
              <div className="w-[100%] h-full bg-red-500 my-5 flex ">
                <div className="basis-[50%]">{card.name}</div>
                <div className="basis-[50%]">{card.name}</div>
                <div className="basis-[50%]">{card.name}</div>
                <div className="basis-[50%]">{card.name}</div>
              </div>
              {/* === Container === */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-end items-end gap-4 container">
        <button className="text-3xl " aria-label="Scroll Left" ref={prevRef}>
          <FaRegArrowAltCircleLeft />
        </button>
        <button className="text-3xl" aria-label="Scroll Right" ref={nextRef}>
          <FaRegArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default RISliderComponent;
