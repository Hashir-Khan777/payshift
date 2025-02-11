"use client";

import { BsBank2, BsEyeSlash } from "react-icons/bs";
import { FaCcApplePay } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import CustomButton from "@/Components/Button";

const CheckOutComponent = ({
  cards,
  headingWhite,
  headingBlack,
  btnText = "Pay AED",
}) => {
  const [showCvv, setShowCvv] = useState(false); // State to toggle CVV visibility
 const [checkMark,setCheckMark] = useState(false)

  return (
    <div className="w-[100%] flex flex-col justify-center gap-[40px] items-center  overflow-hidden md:px-[64px] md:py-[64px] px-[20px] pb-[80px]">

      <h1 className="text-center text-[28px] md:text-[48px] px-[20px] py-[10px] md:mt-0 mt-[40px] font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack[0]}
      </h1>

      {/* ------------ */}
      <div
        className="mx-auto md:w-[711px] md:h-[380px] md:p-[80px] py-[32px] px-[24px] border-[3px] border-white rounded-[6px] grid grid-cols-2 gap-[24px] md:gap-[64px]"
        style={{
          background: "linear-gradient(0deg, #aed2ff 30%, #ffffff)",
          boxShadow: "2px 2px 35px 2px rgba(0, 0, 0, 0.2)", // Adjust as needed
        }}
      >

        <div className="flex flex-col gap-2 justify-start md:items-center items-start md:col-span-2">

          <p className="md:text-[20px]/[25px] text-[14px]/[17.5px] font-[300] font-lexend text-[#000000]">
            To Pay
          </p>
          <p className="md:text-[48px]/[60px] text-[20px]/[25px] font-[600] font-lexend text-[#17A900]">
            AED {cards.amount}
          </p>
        </div>

        <div className="flex flex-col gap-[10px] justify-start items-start">
          <p className="md:text-[20px]/[25px] text-[14px]/[17.5px] font-[300] font-lexend text-[#000000]">
            Reference No
          </p>
          <p className="md:text-[24px]/[30px] text-[20px]/[25px] font-[600] text-[#000000]">
            AED {cards.refNo}
          </p>
        </div>

        <div className="flex flex-col gap-2 md:justify-end md:items-end whitespace-nowrap">
          <p className="md:text-[20px]/[25px] text-[14px]/[17.5px] font-[300] font-lexend text-[#000000]]">
            Merchent Name
          </p>
          <p className="md:text-[24px]/[30px] text-[20px]/[25px] font-[600] text-[#000000]">
            {cards.merchentName}
          </p>
        </div>
      </div>
      {/* ------------ */}

      {/* ---- Payment Method ----------- */}

      <h1 className="text-center text-[28px] md:text-[48px] mb-4 mt-4 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack[1]}
      </h1>

      <div className="flex flex-row md:gap-[24px] gap-[8px] w-full">

        <div
          className="rounded-[4px] shadow-lg lg:h-[135px] lg:w-[310px] w-[25%] md:px-0 md:py-0 px-5 py-4 flex flex-col justify-center items-center gap-[8px]"
          style={{
            background: "linear-gradient(0deg, #aed2ff 10%, #ffffff 90%)",
          }}
        >
          <img
            className="md:w-[64px] w-[24px] md:h-[64px] h-[24px]"
            src="/svgIcons/card.svg"
          />
          <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[500] font-lexend">
            Card
          </span>
        </div>

        <div className="rounded-[4px] shadow-lg lg:h-[135px] lg:w-[310px] w-[25%] md:px-0 md:py-0 px-5 py-4 flex flex-col justify-center items-center gap-[8px]">
        <img
            className="md:w-[64px] w-[24px] md:h-[64px] h-[24px] opacity-[40%]"
            src="/svgIcons/bank.svg"
          />
          <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[500] font-lexend text-gray-400">
            Bank
          </span>
        </div>

        <div className="rounded-[4px] shadow-lg lg:h-[135px] lg:w-[310px] w-[25%] md:px-0 md:py-0 px-5 py-4 flex flex-col justify-center items-center gap-[8px]">
        <img
            className="md:w-[64px] w-[24px] md:h-[64px] h-[24px] opacity-[40%]"
            src="/svgIcons/applePay.svg"
          />
          <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[500] font-lexend text-gray-400 whitespace-nowrap">
            Apple Pay
          </span>
        </div>

        <div className="rounded-[4px] shadow-lg lg:h-[135px] lg:w-[310px] w-[25%] md:px-0 md:py-0 px-5 py-4 flex flex-col justify-center items-center gap-[8px]">
        <img
            className="md:w-[64px] w-[24px] md:h-[64px] h-[24px] opacity-[40%]"
            src="/svgIcons/payPal.svg"
          />
          <span className="md:text-[20px]/[25px] text-[12px]/[15px] font-[500] font-lexend text-gray-400">
            Paypal
          </span>
        </div>
      </div>

      {/* ---- Payment Method ----------- */}

      {/* ======= Payment Details ======== */}

      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-[35px] gap-[16px]">

        {/* Card Number */}
        <div className="w-full flex flex-col gap-[10px]">
          <label className="md:text-[24px]/[30px] text-[14px]/[17.5px] font-lexend font-[400]">
            Card Number
          </label>

          <div className="w-full md:h-[60px] h-[40px] flex items-center gap-2 bg-white shadow-xl px-[20px] py-[14px]">
            <img src="/svgIcons/cardNum.svg" className="w-[30px] h-[24px]" />
            <input
              type="text"
              placeholder="3782 8224 6310 0005"
              className="outline-none text-[16px]/[20px] w-full font-lexend font-[400] "
            />
          </div>
        </div>

        {/* Cardholder Name */}
        <div className="w-full flex flex-col gap-[10px]">
          <label className="md:text-[24px]/[30px] text-[14px]/[17.5px] font-lexend font-[400]">
            Cardholder Name
          </label>
          <div className="w-full md:h-[60px] h-[40px] flex items-center gap-2 bg-white px-[20px] py-[14px] shadow-xl">
            <input
              type="text"
              placeholder="Steve Rogers"
              className="outline-none text-[16px]/[20px] font-lexend font-[400]"
            />
          </div>
        </div>

        {/* Valid Until & CVV */}
        <div className="w-full flex flex-col gap-2 mx-auto">
          <label className="md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] text-[#000000] font-lexend">
            Valid Until
          </label>
          <div className="w-full md:h-[60px] h-[40px] flex flex-row justify-center  gap-1 items-center px-[20px] py-[14px] border bg-white shadow-xl">
            <input
              type="text"
              placeholder="MM/YY"
              className="text-gray-800 w-full outline-none md:px-2 font-lexend"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 mx-auto">
          <label>
            <span className="md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] text-[#000000] font-lexend">
              CVV
            </span>
          </label>

          <div className="w-full md:h-[60px] h-[40px] flex flex-row justify-center gap-1 items-center border bg-white shadow-xl">
            <input
              type={showCvv ? "text" : "password"} // Toggle between text and password
              placeholder="974"
              className="text-gray-800 outline-none bg-white md:px-6 px-4 md:w-[90%] w-[80%] font-lexend"
            />
            <button
              type="button"
              onClick={() => setShowCvv((prev) => !prev)} // Toggle state
              className="text-black px-2 md:w-[10%] w-[15%] transition-colors duration-200"
            >
              {showCvv ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
            </button>
          </div>

          

        </div>

         {/* Save Card Details */}
      <div className="flex flex-row items-center w-full gap-[8px]">
      <div onClick={()=> setCheckMark(!checkMark)}>
        {
          checkMark? <img src="/svgIcons/unCheck.svg" />:<img src="/svgIcons/check.svg" />
        }
      </div>
        
        <label htmlFor="save-card" className="text-gray-700 text-[12px]/[15px] font-lexend">
          Save card details for future payments
        </label>
      </div>

      </div>


     
      {/* ======= Payment Details ======== */}

      {/* Pagination */}
      <div className="flex flex-col justify-center items-center gap-[16px]">
        <CustomButton>
          {btnText} {cards.amount}
        </CustomButton>

        <p className="md:text-[16px]/[20px] text-[12px]/[15px] font-[300] text-center font-lexend tracking-[4%] ">
          Our checkout is totally secure. Your personal information is securely
          transmitted via 128-bit encryption.
        </p>
      </div>

    </div>
  );
};

export default CheckOutComponent;
