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
import CustomButton from "@/Components/Button";
import Card4 from "@/Components/Card4";


const OurProductCards = [
    {
        image: "/Images/ourProduct1.svg",
        title: "Payment Gateway",
        info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
    },
    {
        image: "/Images/ourProduct2.svg",
        title: "SOFTPOS",
        info: "Ensure secure payments with our fully PCI MPOC compliant solution. Quick onboarding makes it easy for SMEs and mobile merchants to get started. No extra hardware is required for this."
    },
    {
        image: "/Images/ourProduct3.svg",
        title: "ANALYTICS",
        info: "Drive deeper insights with data visualization, comprehensive reporting, customer analytics, and AI-driven intelligence."
    },
    {
        image: "/Images/ourProduct4.svg",
        title: "DCC",
        info: "Maximize revenue, gain rate transparency, leverage real- time exchange, and stay compliant with all regulations and scheme rules."
    },
]

const OurProductSlider = ({ cards, headingWhite, headingBlack }) => {
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
            className="bg-cover bg-no-repeat md:bg-right-top bg-center py-20 px-1 md:px-16  flex flex-col justify-center items-center"
            style={{ backgroundImage: "url('/Images/industrySolBg.svg')" }}
        >
            <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
                <span className="text-white px-2">{headingWhite}</span>{headingBlack}
            </h1>

            {/* <div className="mb-4 overflow-hidden"> */}
            <Swiper
                autoplay
                breakpoints={{
                    1024: {
                        slidesPerView: 3,  // Changed from 4 to 3 for better centering
                        centeredSlides: true,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,  // Show partial next slide for better UX
                        centeredSlides: true,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        centeredSlides: true,
                    },
                }}
                style={{
                    padding: "15px 0",
                    width: "100%",  // Ensure full width
                }}
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
            >
                {OurProductCards.map((card, index) => (
                    <SwiperSlide
                        key={index}
                        className="!flex justify-center items-center"  // Important override
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '10px 0'  // Add vertical spacing
                        }}
                    >
                        <Card4 cards={card} className="mx-auto" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="pe-[55px] md:pe-4 flex justify-end items-end gap-4 container">
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

export default OurProductSlider;
