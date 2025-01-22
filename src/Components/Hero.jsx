import React from "react";
import { FaRegCircleRight } from "react-icons/fa6";
import CardSection from "./CardSection";

const Hero = () => {
  return (
    <section className="max-w-[100vw] h-[100vh] flex flex-col">
      {/* Hero Section */}
      <div className="relative max-h-[78vh] flex-[0.8] md:flex-[0.7]">
        <video
          className="w-full h-full object-cover object-center z-[]"
          src="/Images/video.mp4"
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
            className="shadow-xl m-2 relative w-[300px] h-[280px] md:w-[460px] md:h-[400px] bg-white/5 backdrop-blur-xl rounded-sm  border-[3px] border-white/20"
            style={{
              clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 23%)",
            }}
          >
            <div className="relative flex flex-col items-center justify-center gap-5 text-center h-full rounded-md z-20 ">
              <h1 className="text-white text-[30px] md:text-[45px] -tracking-normal font-normal heading_font">
                Pay <span className="text-black">Now</span>
                <br />
                <span className="text-black">With</span> PayShift
              </h1>
              <div>
                <button className="animated-button flex items-center justify-center gap-7 px-5 py-2 bg-black text-white font-normal rounded-full hover:bg-gray-800">
                  <span className="relative text-base left-0 pl-6 pr-4 md:text-3xl animated-text transition-all ease-linear duration-[400ms] font-lexend">
                    Pay
                  </span>
                  <FaRegCircleRight className="relative right-0 transition-all ease-linear duration-[400ms] text-base md:text-3xl animated-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CardSection */}
      <div className="flex-[0.2] md:flex-[0.3]">
        <CardSection />
      </div>
    </section>
  );
};

export default Hero;
