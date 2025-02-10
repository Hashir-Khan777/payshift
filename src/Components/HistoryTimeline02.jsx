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

const HistoryTimeLine02 = ({ cards, headingWhite, headingBlack }) => {
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
            className="w-full py-[100px] flex flex-col md:gap-[80px] gap-[48px] mx-auto overflow-auto"
            style={{
                background: "linear-gradient(90deg,#C2DEFF 50%, #FFFFFF)"
            }}
        >
            <h1 className="text-center text-2xl md:text-4xl font-medium font-cashdisplay">
                <span className="text-white">{headingWhite}</span> {headingBlack}
            </h1>

            <div className="max-w-[1440px] w-full flex justify-center items-center mx-auto">
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
                            setActiveIndex(e.activeIndex + 1);
                        } else {
                            setActiveIndex(e.activeIndex);
                        }
                    }}
                >
                    {cards?.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full px-[80px] flex flex-col gap-[80px] relative mx-auto">

                                {/* <!-- Top Border --> */}
                                <div className="absolute top-20 left-14 w-[92%] h-[4px] bg-white px-[20px]"></div>

                                {/* <!-- Icon at the Top --> */}
                                <div className="absolute md:top-4 top-9 left-10 bg-[#d8e9fe] md:w-[120px] md:h-[120px] w-[90px] h-[90px] rounded-full border-[4px] border-white shadow-md flex justify-center items-center ">
                                    <img src={card.icon} className="md:w-[64px] w-[40px] md:h-[64px] h-[40px]" />
                                </div>

                                {/* <!-- Content --> */}
                                <div className="w-full flex md:flex-row flex-col  mt-[200px] items-center overflow-hidden gap-[48px]">

                                    <div className="flex flex-col basis-[40%] gap-[48px] overflow-hidden">
                                        <div className="flex flex-col gap-[20px]">
                                            <p className="font-[300] font-lexend md:text-[32px]/[51.2px] text-[24px]/[36.2px]">{card.yearRange}</p>
                                            <h2 className="font-[600] font-lexend md:text-[40px]/[64px] text-[32px]/[52px]">{card.title}</h2>
                                        </div>

                                        <p className="font-[400] font-lexend md:text-[26px]/[41.6px] text-[20px]/[36.6px]">{card.description}</p>

                                    </div>

                                    <div className="lg:w-[744px] lg:h-[520px] w-[644px] h-[380px] overflow-hidden flex items-center justify-center">
                                        <img src={card.image} alt="History Illustration" className="w-full object-cover object-center"
                                            style={{ boxShadow: "0px 2px 10px 0px rgba(0, 69, 197, 0.64)",}}
                                        />
                                    </div>
                                </div>
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

export default HistoryTimeLine02;
