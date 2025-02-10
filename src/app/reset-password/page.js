"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import ResetPassword1 from "./ResetPassword1";
import ResetPassword2 from "./ResetPassword2";
import ResetPassword3 from "./ResetPassword3";
import CustomButton from "@/Components/Button";

const Page = () => {
  const pathname = usePathname();
  const [replaceComponet, setReplaceComponent] = useState(1);
  const [back, setBack] = useState("");

  function changeComponent() {
    if (replaceComponet >= 1 && replaceComponet <= 2) {
      setReplaceComponent((prev) => prev + 1);
    }
  }

  function goBack() {
    if (replaceComponet > 1 && replaceComponet <= 3)
      setBack(replaceComponet - 1);
  }

  return (
    <section className="w-full overflow-x-hidden">
      {/* ============== Header =============== */}
      <div className="w-full relative">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full md:h-[316px] h-[140px] overflow-hidden z-0 opacity-[0.4]">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
          >
            <source src="./Images/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Inner Content */}
        <div className="relative md:h-[316px] h-[140px] z-10 flex items-center justify-center shadow-lg">
          <img
            src="./svgIcons/payshiftLogo.svg"
            alt="PayShift Logo"
            className="md:w-[300px] md:h-[99.4px] w-[147.25px] h-[46.5px]"
          />
        </div>
      </div>

      {/* ============== Header =============== */}

      <div className="w-full md:h-[70px] h-[65px] bg-[#000000] flex flex-row justify-center items-center gap-10">
        <p className="font-cashdisplay md:text-[24px]/[30px] text-[20px]/[24.6px] font-[500] tracking-normal text-center text-white">
          Reset Password
        </p>
      </div>

      {/* ===== Go Back ====== */}
      <div className="w-full bg-white">
        <div className="container flex flex-row justify-start items-center gap-5 py-6 px-5 md:px-0 cursor-pointer -z-10 mx-auto">
          <img src="/svgIcons/leftArrow.svg" />
          <p className="text-black/50 md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
            Go Back
          </p>
        </div>
      </div>
      {/* ===== Go Back ====== */}

      {/* {---------- Sign Up/ Sign In Form-----------} */}
      <div
        className="w-full flex flex-col justify-center items-center gap-5 py-10"
        style={{
          background: "linear-gradient(180deg, #aed2ff 30%, #ffffff)",
        }}
      >
        {/* ===== Form ===== */}
        {replaceComponet == 1 ? <ResetPassword1 /> : null}
        {replaceComponet == 2 ? <ResetPassword2 /> : null}
        {replaceComponet == 3 ? <ResetPassword3 /> : null}
        {/* ===== Form ===== */}

        <div className="flex flex-col justify-center items-center my-5">
          {replaceComponet == 1 ? (
            <>
              <CustomButton onClick={changeComponent}>Continue</CustomButton>

              <p className="text-center text-gray-600 font-lexend text-[14px]/[17.5px] font-[300] tracking-[4%] flex flex-row gap-2 justify-center items-center py-5">
                <span>Don't have an account?</span>

                <Link
                  href="/sign-in"
                  className="text-black font-medium text-[17px] underline"
                >
                  Sign Up
                </Link>
              </p>
            </>
          ) : null}
          {replaceComponet == 2 ? (
            <>
              <CustomButton onClick={changeComponent}>
                Verify & Proceed
              </CustomButton>
            </>
          ) : null}

          {replaceComponet == 3 ? (
            <>
              <CustomButton onClick={changeComponent}>
                Reset Password
              </CustomButton>
              <p className="text-center text-gray-600 font-lexend md:text-[14px]/[17.5px] text-[12px]/[12..5px] font-[300] tracking-[4%] flex flex-row gap-2 justify-center items-center py-5">
                <span>Password was last changed on</span>
                <span className="text-black font-medium md:text-[16px] text-[14px]">
                  7/7/24 11:24AM
                </span>
              </p>
            </>
          ) : null}
        </div>
      </div>
      {/* {---------------------------} */}
    </section>
  );
};

export default Page;
