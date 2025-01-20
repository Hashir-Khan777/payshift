"use client";
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
import { ClientPageRoot } from "next/dist/client/components/client-page";

const ReferSliderComponent = ({ cards, headingWhite, headingBlack }) => {
console.log(cards)

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
            className="container mx-auto mt-20 py-20 px-5 md:px-16"
            style={{
                background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
                boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
            }}
        >
            <h1 className="text-center text-3xl md:text-5xl mb-16 font-medium">
                <span className="text-white">{headingWhite}</span> {headingBlack}
            </h1>

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
                                className={`flex flex-col gap-3 justify-center items-center shrink-0 w-full py-16 px-3 md:px-6 shadow-lg rounded-md border-[2px] border-white ${index === activeIndex
                                    ? "bg-gradient-to-b from-white to-[#C2DEFF] border border-white"
                                    : "bg-white/50 scale-90 opacity-50"
                                    } transition-transform duration-300`}
                            >
                            
                            <div className="flex flex-col gap-3 md:gap-6 justify-center items-center">
                                    {/* Title */}
                                    <h1 className="text-base md:text-xl font-semibold">
                                        {card.title}
                                    </h1>

                                    {/* Heading */}
                                    <h1 className="text-lg md:text-2xl font-bold uppercase">{card.heading}</h1>

                                    {/* Info */}
                                    {
                                        card.discount_amount ? <h1 className="text-sm md:text-[18px] font-normal text-start">
                                        Refer a friend and get AED {card.discount_amount} off using code 
                                        <span className="text-lg font-bold underline"> {card.discount_code}</span>
                                        </h1>:null 
                                    }
                                    

                                <p className="text-base my-0">
                                    {card.info}
                                </p>
                                
                                </div>

                                <button className="mx-auto animated-button flex items-center justify-center space-x-2 mt-4 px-5 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
                                    <span className="relative left-0 pl-6 pr-4 text-base md:text-lg leading-relaxed animated-text transition-all ease-linear duration-[400ms]">
                                        {card.btnText}
                                    </span>
                                    <FaRegCircleRight className="relative right-0 transition-all ease-linear duration-[400ms] text-base md:text-3xl animated-icon" />
                                </button>

                            </div>
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


export default ReferSliderComponent;
