"use client";

import React, { useState } from "react";
import { FaRegCircleRight, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import CustomButton from "./Button";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState(null);

  const closePopup = (e) => {
    if (e.target.id === "popup-overlay") {
      setShowPopup(false);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center py-[119px] px-[12px] md:px-[162px]"
      style={{ backgroundImage: `url(/Images/footerbg.png)` }}
    >
      <p className="text-center text-[36px] md:text-[50px] font-medium text-white mb-10">
        Thanks For Using PayShift
      </p>
      <div className="flex flex-wrap gap-10 justify-center items-center mt-10 mb-20">
        <div
          onClick={() => setShowPopup(true)}
          className="w-full bg-white/10 rounded-[4px] py-[36px] px-[24px] shadow-md shrink-0 border-[4px]"
          style={{
            borderImage:
              "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.20) 100%) 1",
          }}
        >
          <p className="text-2xl font-lexend font-medium text-white mb-16 tracking-wide">
            Lets Do This Together
          </p>
          <div className="flex items-center justify-between" id="contact">
            <p className="uppercase text-white text-[24px] md:text-[32px] font-semibold">
              Contact Us
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 52 52"
              fill="white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 26C4 13.8497 13.8497 4 26 4C38.1503 4 48 13.8497 48 26C48 38.1503 38.1503 48 26 48C13.8497 48 4 38.1503 4 26ZM26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0ZM23.4521 16.4775L32.3901 24.6315H25.8H14V28.6315H25.8H32.2407L23.4805 36.3228L26.1195 39.3287L38.8695 28.1344L40.5488 26.66L38.8979 25.1539L26.1479 13.5225L23.4521 16.4775Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {/* <div
          className="w-full md:w-[400px] bg-white/10 rounded-[4px] py-[36px] px-[24px] shadow-md shrink-0 border-[4px]"
          style={{
            borderImage:
              "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.20) 100%) 1",
          }}
        >
          <p className="text-2xl font-medium font-lexend text-white mb-16 tracking-wide">
            Check Latest Insights
          </p>
          <div className="flex items-center justify-between">
            <p className="uppercase text-white text-[24px] md:text-[32px] font-semibold">
              Media Centre
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 52 52"
              fill="white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 26C4 13.8497 13.8497 4 26 4C38.1503 4 48 13.8497 48 26C48 38.1503 38.1503 48 26 48C13.8497 48 4 38.1503 4 26ZM26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0ZM23.4521 16.4775L32.3901 24.6315H25.8H14V28.6315H25.8H32.2407L23.4805 36.3228L26.1195 39.3287L38.8695 28.1344L40.5488 26.66L38.8979 25.1539L26.1479 13.5225L23.4521 16.4775Z"
                fill="white"
              />
            </svg>
          </div>
        </div> */}
      </div>

      <h2 className="text-center text-white text-[25px] font-semibold mb-6 font-lexend">
        Follow Us On
      </h2>
      <div className="flex justify-center gap-8 mb-6">
        {/* <FaInstagram className="w-9 h-9 text-white" />
        <FaXTwitter className="w-9 h-9 text-white" />
        <RiYoutubeLine className="w-9 h-9 text-white" />
        <img
          src="/svgIcons/facebook.svg"
          className="w-9 h-9 text-white fill-white"
        /> */}
      </div>
      <p className="text-2xl font-normal text-white/65 text-center mb-8 font-lexend">
        ©PayShift {new Date().getFullYear()}. All rights reserved
      </p>
      {/* Popup */}
      {showPopup && (
        <div
          id="popup-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white lg:w-[800px] md:w-[90%] h-[600px] lg:px-[148px] md:px-[100px] md:py-[80px] py-[50px] px-[20px] sm:px-[50px] shadow-lg w-[90%] sm:w-[95%] overflow-hidden transform transition-transform duration-300 ease-in-out translate-y-full animate-popup bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: "url('/Images/popUpbg.png')" }}
          >
            <div className="w-full mx-auto flex flex-col justify-center items-center gap-6 md:gap-10">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full mx-auto  flex flex-col justify-center items-start gap-2">
                  <label className="font-lexend font-[400] text-[16px]">
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-[40px] px-3 font-lexend shadow-xl outline-none"
                  />
                </div>
                <div className="w-full mx-auto  flex flex-col justify-center items-start gap-2">
                  <label className="font-lexend font-[400] text-[16px]">
                    Business Registered Country
                  </label>
                  {/* <div className="w-full">
                    <input type="text" className="w-[95%] h-[40px] px-3 font-lexend shadow-xl border border-gray-300" />
                    <img src="/Images/arrowdown.svg" alt="" className="w-[5%]" />
                  </div> */}
                  <div className="w-full relative">
                    <input
                      type="text"
                      className="w-full h-[40px] px-3 pr-10 font-lexend shadow-xl outline-none"
                    />
                    {/* <img
                      src="/Images/arrowdown.svg"
                      alt=""
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 md:px-3 "
                    /> */}
                  </div>
                </div>

                {/* <div className="w-full mx-auto flex flex-col justify-center items-start gap-2 relative">
                  <label className="font-lexend font-[400] text-[16px]">
                    Mobile
                  </label>

                  <div className="w-full relative">
                    <input
                      type="text"
                      className="w-full h-[40px] pl-[70px] pr-[40px] font-lexend shadow-xl outline-none"
                    />

                    <img
                      src="/Images/flag.svg"
                      alt="UAE Flag"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />

                    <span className="absolute left-9 top-1/2 transform -translate-y-1/2 text-black font-lexend font-medium">
                      +971
                    </span>

                    <img
                      src="/Images/arrowdown.svg"
                      alt="Dropdown"
                      className="absolute left-20 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                </div> */}

                <div className="w-full mx-auto  flex flex-col justify-center items-start gap-2">
                  <label className="font-lexend font-[400] text-[16px]">
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full h-[40px] px-3 font-lexend shadow-xl outline-none"
                  />
                </div>
              </div>
              <CustomButton onClick={() => setMessage("We appreciate you reaching out! Our team is excited to assist you and will connect with you as soon as possible.")}>
                Register
              </CustomButton>
             <div className="bg-teal-600 rounded-b px-4 py-3 shadow-md">
               <p className="text-base text-white">{message}</p>
             </div>
            </div>
            {/* {message ? */}
             
              {/* : null} */}
          </div>
        </div>
      )}

      {/* Popup Animation */}
      <style jsx>{`
        @keyframes popup {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-popup {
          animation: popup 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Footer;
