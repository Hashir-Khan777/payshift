import React from "react";
import CardSection from "./CardSection";
import localFont from "next/font/local";
import CustomButton from "./Button";

const cahdisplay = localFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--clashvariable",
});

const Hero = () => {
  return (
    <section className="flex-1">
      {/* Hero Section */}
      <div className="relative">
        <img
          className="w-full h-[calc(100vh-100px-320px)] lg:h-[calc(100vh-100px-232px)] object-cover object-center"
          src="/Images/dummybg.png"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Centered Box */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{ top: "5%", transform: "translateY(5%)" }}
        >
          <div
            className="shadow-xl m-2 relative w-[300px] h-[280px] md:w-[460px] lg:h-[400px] bg-white/5 backdrop-blur-md rounded-sm  border-[3px] border-white/20"
            style={{
              clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 23%)",
            }}
          >
            <div className="relative flex flex-col items-center justify-center gap-5 text-center h-full rounded-md z-20 ">
              <h1
                className={`text-white text-[30px] md:text-[45px] -tracking-normal font-medium font-cashdisplay`}
              >
                Pay <span className="text-black">Now</span>
                <br />
                <span className="text-black">With</span> PayShift
              </h1>
              <div>
                <CustomButton>Pay</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CardSection */}
      {/* <div className="flex-[0.2] md:flex-[0.3]"> */}
      {/* <CardSection /> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
