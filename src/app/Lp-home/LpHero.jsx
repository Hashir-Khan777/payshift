"use client";
import React, { useState } from "react";
// import { motion } from "framer-motion";
import localFont from "next/font/local";
import CustomButton from "../../Components/Button";
import CustomButton2 from "../../Components/Button2";
import FormPopUp from "@/Components/FormPopUp";

const cashdisplay = localFont({
  src: "../../fonts/ClashDisplay-Variable.ttf",
  variable: "--clashvariable",
});

const LpHero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = (e) => {
    if (e.target.id === "popup-overlay") {
      setShowPopup(false);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-no-repeat sm:bg-center bg-left-top flex items-center justify-center md:mt-10 mt-20 px-4 sm:py-10 py-20"
      style={{ backgroundImage: "url('/Lpbg1.png')" }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl ">
        {/* Card Section */}
        <div
          className="relative lg:left-10 md:left-9 hidden md:flex sm:gap-0 gap-10 flex-col justify-center items-center w-full lg:h-[500px] h-[400px] sm:w-1/2 max-w-md md:max-w-lg lg:max-w-xl p-6 md:p-10 bg-no-repeat bg-cover shadow-lg"
          style={{
            backgroundImage: "url('/Images/herobg.png')",
            filter: "drop-shadow(1px 1px 55px rgba(41, 0, 128, 0.4))",
          }}
        >
          <h1
            className={`text-black text-2xl sm:text-xl md:text-3xl lg:text-5xl font-medium text-center font-cashdisplay`}
          >
            Shift To <br />
            <span className="text-white px-2">Effortless</span>
            <br /> Payment
          </h1>
          <div className="flex flex-col gap-4 mt-6">
            <CustomButton>Sign Up</CustomButton>
            <CustomButton2 onClick={() => setShowPopup(true)}>
              Connect
            </CustomButton2>
          </div>
        </div>

        {/* FOr SMaller Screens */}
        <div className="w-[250px] md:hidden flex flex-col gap-[24px] justify-center items-center">
          <h1
            className={`text-black text-2xl sm:text-xl md:text-3xl lg:text-5xl font-medium text-center font-cashdisplay`}
          >
            Shift To <br />
            <span className="text-white px-2">Effortless</span>
            Payment
          </h1>
          <div className="flex flex-col gap-4 mt-6 w-[200px]">
            <CustomButton>Sign Up</CustomButton>
            <CustomButton2 onClick={() => setShowPopup(true)}>
              Connect
            </CustomButton2>
          </div>
        </div>
        {/* FOr SMaller Screens */}

        {/* Image Section */}
        <div className="relative  md:right-8 lg:right-10 w-full sm:w-1/2 max-w-md md:max-w-lg lg:max-w-xl flex justify-center">
          {/* Dollar Icons Animation
          {[...Array(10)].map((_, i) => (
            <motion.img
              key={i}
              src="/dollar.png"
              alt="Dollar Icon"
              className="absolute w-10 h-10"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "110%", opacity: 1 }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))} */}

          <img
            src="/lpHero.gif"
            className="w-full h-auto object-cover"
            alt="PayShift GIF"
          />
        </div>
      </div>

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
                    <img
                      src="/Images/arrowdown.svg"
                      alt=""
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 md:px-3 "
                    />
                  </div>
                </div>

                <div className="w-full mx-auto flex flex-col justify-center items-start gap-2 relative">
                  <label className="font-lexend font-[400] text-[16px]">
                    Mobile
                  </label>

                  <div className="w-full relative">
                    {/* Input Field */}
                    <input
                      type="text"
                      className="w-full h-[40px] pl-[70px] pr-[40px] font-lexend shadow-xl outline-none"
                    />

                    {/* Country Flag */}
                    <img
                      src="/Images/flag.svg"
                      alt="UAE Flag"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />

                    {/* Country Code */}
                    <span className="absolute left-9 top-1/2 transform -translate-y-1/2 text-black font-lexend font-medium">
                      +971
                    </span>

                    {/* Arrow Down Icon */}
                    <img
                      src="/Images/arrowdown.svg"
                      alt="Dropdown"
                      className="absolute left-20 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                </div>

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
              <CustomButton onClick={() => setShowPopup(false)}>
                Register
              </CustomButton>
            </div>
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
    </section>
  );
};

export default LpHero;
