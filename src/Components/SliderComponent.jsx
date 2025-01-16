import Link from "next/link";
import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FaRegCircleRight } from "react-icons/fa6";

const SliderComponent = ({ cards, headingWhite, headingBlack }) => {
  return (
    <div
      className="container mx-auto mt-20 py-20 px-5 lg:px-16"
      style={{
        background: "linear-gradient(0deg, #E8F3FF 15.92%, #92A8FF 100%)",
        boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
      }}
    >
      <h1 className="text-center text-5xl mb-16 font-medium">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>
      <div className="flex items-center justify-center mb-4 overflow-hidden">
        {cards?.map((card, index) => (
          <div
            key={index}
            className={`shrink-0 w-[412px] py-16 px-6 shadow-lg ${
              card.active
                ? "bg-gradient-to-b from-white to-[#C2DEFF] border border-white"
                : "bg-white/50 scale-90 opacity-50"
            } transition-transform duration-300`}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-2xl font-semibold">{card.title}</h1>
              <Link
                href="/"
                className="text-black text-lg underline font-medium"
              >
                More Info
              </Link>
            </div>
            <p className="py-9 text-xl">
              {card.info}{" "}
              <span className="text-3xl font-semibold">{card.ref_no}</span>
            </p>
            {!card.offer ? (
              <p className="text-xl font-medium mb-12">
                Refrence Number:{" "}
                <span className="text-3xl font-semibold">{card.ref_no}</span>
              </p>
            ) : null}
            <button className="mx-auto flex items-center justify-center space-x-2 mt-4 px-3 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
              <span className="pl-6 pr-4 text-xl">Check</span>
              <FaRegCircleRight className="text-3xl" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-end gap-4 container">
        <button className="text-3xl " aria-label="Scroll Left">
          <FaRegArrowAltCircleLeft />
        </button>
        <button className="text-3xl" aria-label="Scroll Right">
          <FaRegArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
