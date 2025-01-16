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
          className="relative w-[700px] h-[500px] bg-white/35 backdrop-blur-md rounded-xl shadow-lg"
          style={{
            clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 23%)",
          }}
        >
          <div className="relative flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-white text-[65px] tracking-wider font-medium">
              Pay <span className="text-black">Now</span>
              <br />
              <span className="text-black">With</span> PayShift
            </h1>
            <div>
              <button className="flex items-center justify-center space-x-2 mt-4 px-3 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800">
                <span className="pl-6 pr-4 text-3xl">Pay</span>
                <FaRegCircleRight className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
