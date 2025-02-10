import Profile2 from "@/Components/Profile2";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Footer from "@/Components/Footer";

function page() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container flex flex-row justify-start items-center gap-5 py-6 px-5 md:px-0 cursor-pointer -z-10 mx-auto">
          <img src="/svgIcons/leftArrow.svg" />
          <p className="text-black/50 md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
            Go Back
          </p>
        </div>
      </div>
      <section
        className="w-full min-h-[100vh]"
        style={{ background: "linear-gradient(45deg, #8ABEFF 20%, #ffffff)" }}
      >
        <Profile2 />
      </section>
      <Footer />
    </>
  );
}

export default page;
