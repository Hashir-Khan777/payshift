import React from "react";
import { FaRegCircleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="w-full h-full object-cover"
        src="/Images/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-[300px] h-[280px] md:w-[700px] md:h-[500px] bg-white/35 backdrop-blur-md rounded-xl shadow-lg"
          style={{
            clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 23%)",
          }}
        >
          <div className="relative flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-white text-[32px] md:text-[65px] tracking-wider font-medium">
              Pay <span className="text-black">Now</span>
              <br />
              <span className="text-black">With</span> PayShift
            </h1>
            <div>
              <button className="animated-button flex items-center justify-center space-x-2 mt-4 px-3 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
                <span className="relative left-0 pl-6 pr-4 text-base md:text-3xl animated-text transition-all ease-linear duration-[400ms]">
                  Pay
                </span>
                <FaRegCircleRight className="relative right-0 transition-all ease-linear duration-[400ms] text-base md:text-3xl animated-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
