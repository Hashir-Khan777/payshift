import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export default function ErrorMessage() {
  return (
    <>
      <section
        className="my-0  w-[100%]"
        style={{
          background: "linear-gradient(90deg, #aed2ff 30%, #ffffff)",
        }}
      >
        <Navbar />
        <div className="w-full bg-white">
          <div className="container flex flex-row justify-start items-center gap-5 py-6 px-5 md:px-0 cursor-pointer -z-10 mx-auto">
            <img src="/svgIcons/leftArrow.svg" />
            <p className="text-black/50 md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
              Go Back
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8  mt-10 text-center">
          <img
            src="/svgIcons/error.svg"
            className="w-[115px] h-[115px]"
            alt="error"
          />

          <h1 className="md:text-[48px]/[60px] text-[28px]/[34.44px] font-cashdisplay font-[500] text-center px-[20px] py-[10px]">
            Payment Failed
          </h1>

          <p className="md:text-[24px]/[30px] text-[16px]/[20px] md:font-[500] font-[300] font-lexend tracking-normal px-5">
            An Unexpected error occurred. Please try again in sometime
          </p>

          <Link
            href="/"
            className="text-[16px]/[20px] font-[600] font-lexend underline"
          >
            Retry Payment
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
