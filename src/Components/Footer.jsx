import React from "react";
import { FaRegCircleRight, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center py-[119px] px-[12px] md:px-[162px]"
      style={{ backgroundImage: `url(/Images/footerbg.png)` }}
    >
      <p className="text-center text-[36px] md:text-[50px] font-medium text-white mb-10">
        Thanks For Using PayShift
      </p>

      <div className="flex flex-wrap gap-10 justify-center items-center mb-20">
        <div
          className="w-full md:w-[400px] bg-white/10 rounded-[4px] py-[36px] px-[24px] shadow-md shrink-0 border-[4px]"
          style={{
            borderImage:
              "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.20) 100%) 1",
          }}
        >
          <p className="text-2xl font-lexend font-medium text-white mb-16 tracking-wide">
            Lets Do This Together
          </p>
          <div className="flex items-center justify-between">
            <p className="uppercase text-white text-[24px] md:text-[32px] font-semibold">
              Contact Us
            </p>
            <img
              src="/svgIcons/footericon2.svg"
              className="w-[48px] text-white"
            />
          </div>
        </div>
        <div
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
            <img
              src="/svgIcons/footericon2.svg"
              className="w-[48px] text-white"
            />
          </div>
        </div>
      </div>

      <h2 className="text-center text-white text-[25px] font-semibold mb-6 font-lexend">
        Follow Us On
      </h2>
      <div className="flex justify-center gap-8 mb-6">
        <FaInstagram className="w-9 h-9 text-white" />
        <FaXTwitter className="w-9 h-9 text-white" />
        <RiYoutubeLine className="w-9 h-9 text-white" />
        <img src="/svgIcons/facebook.svg" className="w-9 h-9 text-white" />
      </div>
      <p className="text-2xl font-normal text-white/65 text-center mb-8 font-lexend">
        ©PayShift 2024. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
