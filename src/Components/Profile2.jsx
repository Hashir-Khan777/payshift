import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import CustomButton from "./Button";

const imageUrl = "/Images/profile2.png";

function Profile2() {
  return (
    <>
      {/* Container div starts */}
      <div className="w-[90%] md:h-[90vh] mx-auto flex md:flex-row flex-col gap-10 justify-center items-center">
        {/* ======= Profile Image ======= */}
        <div className="relative md:w-[310px] w-[100vw] md:h-[290px] bg-red-700">
          <img
            src={imageUrl}
            alt="Profile Image"
            className="object-cover object-center md:w-[310px] w-[100vw] md:h-[290px] h-[50vh]"
          />

          <img
            src="/svgIcons/camera.svg"
            alt="camera icon"
            className="absolute bottom-5 right-5"
          />
        </div>
        {/* ======= Profile Image ======= */}

        {/* ====== Profile Details ======= */}
        <div
          className="md:w-[866px] w-[95%] md:h-[290px] flex flex-col md:gap-5 gap-3 justify-center items-start rounded-md border-2 border-white md:px-10 px-3 py-3"
          style={{
            // background:"linear-gradient(0deg, #8ABEFF, #ffffff 50%)"
            background: "linear-gradient(0deg, #aed2ff 30%, #ffffff)",
            boxShadow: "2px 2px 35px 2px rgba(0, 0, 0, 0.2)", // Adjust as needed
          }}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-lexend md:text-[32px]/[40px] text-[14px]/[17.5px] font-[600]">
              Personal Details
            </h1>
            <img
              src="/svgIcons/edit.svg"
              alt="Edit icon"
              className="md:w-[38px]  w-[24px] md:h-[38px] h-[24px]"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <h3 className="font-lexend md:text-[20px]/[25px] text-[12px]/[15px] font-[600] tracking-[4%]">
              Steve Roger
            </h3>
            <p className="font-lexend md:text-[20px]/[25px] text-[12px]/[15px] font-[300] tracking-[4%]">
              +971 55 707 7482
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full flex-wrap">
            <p className="font-lexend md:text-[20px]/[25px] text-[12px]/[15px] font-[600] tracking-[4%]">
              steverogers@shield.mcu.com
            </p>

            <CustomButton
              textClass="md:text-xl"
              iconClass="md:w-[32px] md:h-[32px]"
            >
              Verify
            </CustomButton>
          </div>
        </div>
        {/* ====== Profile Details ======= */}
      </div>
      {/* Container div ends */}
    </>
  );
}

export default Profile2;
