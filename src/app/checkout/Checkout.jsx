"use client";

import { BsBank2, BsEyeSlash } from "react-icons/bs";
import { FaCcApplePay } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { BsEye } from "react-icons/bs";

const CheckOutComponent = ({
  cards,
  headingWhite,
  headingBlack,
  btnText = "Pay AED",
}) => {
  const [showCvv, setShowCvv] = useState(false); // State to toggle CVV visibility

  return (
    <div className="w-[100%] flex flex-col justify-center gap-10 items-center mx-auto md:pt-10 pt-14 pb-32 overflow-hidden">
      <h1 className="text-center text-[28px] md:text-[48px] mb-4 mt-4 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack[0]}
      </h1>

      {/* ------------ */}
      <div
        className="mx-auto md:w-[724px] w-[90%] py-[32px] px-[24px] flex flex-row flex-wrap justify-between gap-5 border-2 border-white rounded-md"
        style={{
          background: "linear-gradient(0deg, #aed2ff 30%, #ffffff)",
          boxShadow: "2px 2px 35px 2px rgba(0, 0, 0, 0.2)", // Adjust as needed
        }}
      >
        <div className="flex flex-col gap-2 justify-start">
          <p className="md:text-[16px]/[17.5px] text-[14ppx] font-[400] text-[#000000]">
            To Pay
          </p>
          <p className="text-[20px]/[25px] font-[500] text-[#17A900]">
            AED {cards.amount}
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-start">
          <p className="md:text-[16px]/[17.5px] text-[14ppx] font-[400] text-[#000000]">
            Reference No
          </p>
          <p className="text-[20px]/[25px] font-[600] text-[#000000]]">
            AED {cards.refNo}
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-start">
          <p className="md:text-[16px]/[17.5px] text-[14ppx] font-[400] text-[#000000]">
            Merchent Name
          </p>
          <p className="text-[20px]/[25px] font-[600] text-[#000000]">
            {cards.merchentName}
          </p>
        </div>
      </div>
      {/* ------------ */}

      {/* ---- Payment Method ----------- */}

      <h1 className="text-center text-[28px] md:text-[48px] mb-4 mt-4 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack[1]}
      </h1>

      <div className="flex flex-row md:gap-4 gap-2 md:px-0 px-3">
        <div
          className="rounded-[4px] shadow-lg md:h-[87px] md:w-[163px] md:px-0 md:py-0 px-5 py-4 flex flex-col justify-center items-center gap-1"
          style={{
            background: "linear-gradient(0deg, #aed2ff 10%, #ffffff 90%)",
          }}
        >
          <img
            className="md:w-[30px] w-[24px] md:h-[30px] h-[24px]"
            src="/svgIcons/card.svg"
          />
          <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[500] font-lexend">
            Card
          </span>
        </div>

        <div className="rounded-[4px] shadow-lg md:h-[87px] md:w-[163px] md:px-0 md:py-0 px-5 py-4 flex flex-col justify-center items-center gap-1">
          <BsBank2 className="text-gray-400 md:w-[30px] w-[24px] md:h-[30px] h-[24px]" />
          <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[500] font-lexend text-gray-400">
            Bank
          </span>
        </div>

        <div className="rounded-[4px] shadow-lg md:h-[87px] md:w-[163px] md:px-0 md:py-0 px-5 py-4 flex flex-col justify-center items-center gap-1">
          <FaCcApplePay className="text-gray-400 md:w-[30px] w-[24px] md:h-[30px] h-[24px]" />
          <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[500] font-lexend text-gray-400 whitespace-nowrap">
            Apple Pay
          </span>
        </div>

        <div className="rounded-[4px] shadow-lg md:h-[87px] md:w-[163px] md:px-0 md:py-0 px-5 py-4 flex flex-col justify-center items-center gap-1">
          <GrPaypal className="text-gray-400 md:w-[30px] w-[24px] md:h-[30px] h-[24px]" />
          <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[500] font-lexend text-gray-400">
            Paypal
          </span>
        </div>
      </div>

      {/* ---- Payment Method ----------- */}

      {/* ======= Payment Details ======== */}

      <div className="md:w-[724px] w-[100%] flex flex-col md:gap-10 gap-5 p-6 rounded-lg">
        {/* Card Number */}
        <div className="flex flex-col gap-2 md:w-[326px] w-[90%] mx-auto">
          <label className="md:text-[24px]/[30px] text-[14px]/[17.5px] font-lexend font-[400]">
            Card Number
          </label>

          <div className="md:w-[326px] w-full h-[40px] flex items-center gap-2 bg-white  py-[8px] px-[20px] shadow-xl">
            <img src="/svgIcons/cardNum.svg" />
            <input
              type="text"
              placeholder="3782 8224 6310 0005"
              className="outline-none text-[16px]/[20px] font-lexend font-[400]"
            />
          </div>
        </div>

        {/* Cardholder Name */}
        <div className="flex flex-col gap-2 md:w-[326px] w-[90%] mx-auto">
          <label className="md:text-[24px]/[30px] text-[14px]/[17.5px] font-lexend font-[400]">
            Cardholder Name
          </label>
          <div className="md:w-[326px] w-full h-[40px] flex items-center gap-2 bg-white  py-[8px] px-[20px] shadow-xl">
            <input
              type="text"
              placeholder="Steve Rogers"
              className="outline-none text-[16px]/[20px] font-lexend font-[400]"
            />
          </div>
        </div>

        {/* Valid Until & CVV */}
        <div className="mx-auto md:w-[326px] w-[90%] flex flex-row justify-center items-center gap-4">
          <div className="flex flex-col gap-2 md:w-[158px] w-[45%] mx-auto">
            <label className="text-[14px]/[17.5px] font-[400] text-[#000000] font-lexend">
              Valid Until
            </label>
            <div className="flex flex-row justify-center  gap-1 items-center  px-5 py-2  border bg-white shadow-xl">
              <input
                type="text"
                placeholder="MM/YY"
                className="text-gray-800 md:w-[100px] w-[90%] outline-none md:px-2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 md:w-[158px] w-[45%] mx-auto">
            <label>
              <span className="text-[14px]/[17.5px] font-[400] text-[#000000] font-lexend">
                CVV
              </span>
            </label>

            <div className="flex flex-row justify-center gap-1 items-center  px-5 py-2  border bg-white shadow-xl">
              <input
                type={showCvv ? "text" : "password"} // Toggle between text and password
                placeholder="974"
                className="text-gray-800 md:w-[100px] w-[100%] outline-none md:px-2"
              />
              <button
                type="button"
                onClick={() => setShowCvv((prev) => !prev)} // Toggle state
                className="text-black px-2 transition-colors duration-200"
              >
                {showCvv ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Save Card Details */}
        <div className="flex flex-row gap-2 md:w-[326px] w-[90%] mx-auto">
          <input
            type="checkbox"
            id="save-card"
            className="w-4 h-4 bg-transparent border-black border-2 text-black"
          />
          <label htmlFor="save-card" className="text-gray-700 text-sm">
            Save card details for future payments
          </label>
        </div>
      </div>
      {/* ======= Payment Details ======== */}

      {/* Pagination */}

      <button className="animated-button flex items-center justify-center gap-7 px-5 py-2 bg-black text-white font-normal rounded-full hover:bg-gray-800 h-[37px]">
        <span className="relative  text-base left-0 md:text-[20px]/[25px] animated-text transition-all ease-linear duration-[400ms] font-lexend">
          {btnText} {cards.amount}
        </span>
        <img
          src="/svgIcons/slidercomponenticon.svg"
          className="relative right-0 transition-all ease-linear duration-[400ms] animated-icon w-[22px] h-[18px] md:w-[32px] md:h-[25px]"
        />
      </button>

      <p className="text-[12px]/[15px] font-[300] text-center font-lexend tracking-[4%] px-5">
        Our checkout is totally secure. Your personal information is securely
        transmitted via 128-bit encryption.
      </p>
    </div>
  );
};

export default CheckOutComponent;
