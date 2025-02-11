"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const RISliderComponent = ({
  cards,
  headingWhite,
  headingBlack,
  categories,
  link,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Load active category from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCat = localStorage.getItem("activeCategory");
      if (storedCat) {
        setActiveCategory(storedCat);
      }
    }
  }, []);

  // Filter cards based on the selected category
  const filteredCards =
    activeCategory === "All"
      ? cards
      : cards.filter((card) => card.category === activeCategory);

  // Handle category click and save to localStorage
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeCategory", category);
    }
  };

  return (
    <div
      className="container rounded-lg mx-auto mt-20 md:py-20 px-3 md:px-16 border-[2px] border-white"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <h1 className="text-center text-2xl md:text-5xl mb-16 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>

      {/* ========= Categories ============ */}
      <nav className="font-lexend bg-[#FFFFFF66] text-black lg:text-[20px] md:text-[18px] text-[12px] tracking-[4%] flex flex-row md:gap-[20px] gap-[4px] stify-center sm:justify-start items-center mx-auto md:max-w-[682px] sm:max-w-[318px] md:p-[20px] p-[6px] rounded-[3px] overflow-x-auto">
        {categories?.map((item) => (
          <button
            key={item.id}
            className={`px-[8px] py-[4px] font-[600] whitespace-nowrap rounded-lg transition-all duration-200 ${
              activeCategory === item.cat ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategoryClick(item.cat)}
          >
            {item.cat}
          </button>
        ))}
      </nav>

      {/* ====== location ====== */}
      <div className="flex flex-row gap-[20px] items-center justify-center mx-auto bg-black mt-8 max-w-max h-[48px] rounded-full px-[48px]">
        <div className="flex flex-row gap-[4px] items-center">
          <MdLocationPin className="text-white" />
          <p className="flex items-center text-white font-normal text-base gap-2">
            <span className="font-medium">Dubai</span>
            <div
              className="w-[8px] h-[8px] rounded-full"
              style={{ backgroundColor: "rgba(217, 217, 217, 1)" }}
            />
            <span>2BHK, 2BR</span>
          </p>
        </div>

        <img src="svgIcons/pen.svg" alt="edit" className="w-[17px] " />
      </div>

      {/* ========= Slider ============ */}
      <div className="flex items-center justify-center mb-4 overflow-hidden w-full md:px-2 ">
        {/* <Swiper slidesPerView={1} modules={[Navigation]}> */}
        {/* {Array.from({
          length: Math.ceil(filteredCards.length / 4),
        }).map((_, slideIndex) => ( */}
        {/* <SwiperSlide key={slideIndex}> */}
        <div className="w-full my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10 gap-5 md:p-5 p-1">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              className="w-full shadow-lg p-[16px] gap-[16px] md:gap-[0] border-2 border-white rounded-md flex md:flex-col items-center flex-row md:items-start"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 16%, #C2DEFF 100%)",
                boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.48)",
              }}
            >
              <div className="w-[50%] md:w-full rounded-[10px] h-[108px] md:h-[253px] md:mb-[36px]">
                <img
                  src={card.image}
                  alt="Property Image"
                  className="object-cover w-full h-full rounded-[10px]"
                />
              </div>

              <div className="w-full">
                <div className="w-full flex justify-between items-center md:mb-[30px]">
                  <h1 className="font-semibold font-lexend md:text-[24px] text-[18px]">
                    {card.name}
                  </h1>
                  <p className="flex flex-row items-center gap-2">
                    <img src="svgIcons/star.svg" alt="Rating" className="" />
                    <span className="md:text-[16px] text-[12px]">
                      {card.rating}
                    </span>
                  </p>
                </div>
                <p className="font-lexend font-semibold md:text-[16px] text-[12px] mb-[10px]">
                  {card.price}
                </p>
                <p className="font-lexend font-normal flex flex-row justify-start items-center gap-1 md:text-base md:text-[16px] text-[12px]">
                  <img
                    src="svgIcons/location.svg"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="flex items-center gap-[6.4px] font-lexend font-light text-base">
                    <span>{card.loc}</span>
                    <div
                      className="w-[6.4px] h-[6.4px] rounded-full opacity-50"
                      style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
                    />
                    <span>1400 SQFT</span>
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* </SwiperSlide> */}
        {/* ))} */}
        {/* </Swiper> */}
      </div>

      <div className="text-center mt-[60px] font-lexend">
        <Link
          href="/"
          className="text-black text-sm md:text-base underline font-medium"
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default RISliderComponent;
