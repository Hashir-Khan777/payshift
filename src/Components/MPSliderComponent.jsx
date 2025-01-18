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

const MPSliderComponent = ({ cards, headingWhite, headingBlack }) => {
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


{/* =========== Payment Due =========== */}
            <div className=" flex flex-row gap-3 items-center justify-center bg-black w-[300px] h-[40px] mx-auto text-white rounded-full mb-14">
            <svg
                                                    viewBox="0 0 27 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[25px] h-[25px] md:w-[27px] md:h-[22px]"
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
            <p>Total of <span className="font-bold">AED 250</span> urgently due.</p>
            </div>
            {/* =========== Payment Due End =========== */}



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
                                className={`flex flex-col gap-3 shrink-0 w-full py-16 px-3 md:px-6 shadow-lg rounded-md border-[2px] border-white ${index === activeIndex
                                    ? "bg-gradient-to-b from-white to-[#C2DEFF] border border-white"
                                    : "bg-white/50 scale-90 opacity-50"
                                    } transition-transform duration-300`}
                            >

                                {/* Propert Id and heading start */}
                                <div className="flex flex-col gap-3">
                                    {card.propertyId ? (
                                        <p className="flex items-center gap-2 text-[10px] md:text-sm font-bold bg-[#D1BCFF] rounded-full px-5 py-2 mt-3 w-[60%]">
                                            <div className="w-[12px] h-[12px] bg-[#A786F0] rounded-full"></div>
                                            <div>
                                                <span>Property ID:</span>
                                                <span className="font-bold">{card.propertyId}</span>
                                            </div>

                                        </p>
                                    ) : null}
                                    <h1 className="text-base md:text-xl font-bold">
                                        {card.title}
                                    </h1>
                                </div>

                                {/* Propert Id and heading end */}


                                <div className="flex flex-col gap-2 my-0">

                                    {card.payment ? (
                                        <p className="font-bold text-xl md:text-3xl text-center">
                                            AED {card.amount}
                                        </p>
                                    ) : null}

                                    {card.payment || card.appointment ? (
                                        <div
                                            className={`flex gap-3 text-xl items-center justify-center w-full ${card.alertType === "success"
                                                ? "text-[#17A900]"
                                                : "text-[#F93434]"
                                                } font-semibold mb-9`}
                                        >
                                            {card.alertType === "danger" ? (
                                                <svg
                                                    viewBox="0 0 27 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[25px] h-[25px] md:w-[27px] md:h-[22px]"
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

                                            <h1 className="text-[18px] md:text-[22px] font-bold">{card.alert}</h1>
                                        </div>
                                    ) : null}

                                </div>

                                <p className="text-base my-0">
                                    {card.info}
                                </p>


                                <button className="mx-auto animated-button flex items-center justify-center space-x-2 mt-4 px-5 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
                                    <span className="relative left-0 pl-6 pr-4 text-base md:text-xl animated-text transition-all ease-linear duration-[400ms]">
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

export default MPSliderComponent;
