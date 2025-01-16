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
            {card.payment || card.appointment ? (
              <div
                className={`flex gap-6 text-3xl items-center justify-center w-full ${
                  card.alertType === "success"
                    ? "text-[#17A900]"
                    : "text-[#F93434]"
                } font-semibold mb-9`}
              >
                {card.alertType === "danger" ? (
                  <svg
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                <h1>{card.alert}</h1>
              </div>
            ) : null}
            <div
              className={`flex ${
                card.propertyId ? "items-start" : "items-center"
              } justify-between w-full`}
            >
              <div>
                <h1 className="text-2xl font-semibold">{card.title}</h1>
                {card.propertyId ? (
                  <p className="text-base font-medium bg-[#D1BCFF] rounded-full px-5 py-2 mt-3">
                    Property ID:{" "}
                    <span className="font-bold">{card.propertyId}</span>
                  </p>
                ) : null}
              </div>
              <Link
                href="/"
                className="text-black text-lg underline font-medium"
              >
                More Info
              </Link>
            </div>
            {card.payment ? (
              <p className="font-bold text-3xl text-center my-12">
                AED {card.amount}
              </p>
            ) : null}
            {card.appointment ? (
              <p className="font-bold text-3xl text-center my-12">
                {card.date}
              </p>
            ) : null}
            {!card.payment && !card.appointment ? (
              <p className="py-9 text-xl">
                {card.info}{" "}
                {card.offer ? (
                  <span className="text-3xl font-semibold">{card.ref_no}</span>
                ) : null}
              </p>
            ) : null}
            {card.ref_no && !card.offer ? (
              <p className="text-xl font-medium mb-12">
                Refrence Number:{" "}
                <span className="text-3xl font-semibold">{card.ref_no}</span>
              </p>
            ) : null}
            <button className="mx-auto flex items-center justify-center space-x-2 mt-4 px-3 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
              <span className="pl-6 pr-4 text-xl">{card.btnText}</span>
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
