"use client";
import React, {useState} from "react";
import Link from "next/link";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import CustomButton from "./Button";

const SignComponent = () => {
  const [name, setName] = useState("sign-in");

  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full md:h-[70px] h-[65px] bg-[#000000] flex flex-row justify-center items-center gap-10">
        <button
          onClick={() => setName("sign-in")}
          className={`font-cashdisplay md:text-[24px]/[30px] text-[20px]/[24.6px] font-[500] tracking-normal text-center ${
            name === "sign-in" ? "text-white" : "text-gray-400"
          }`}
        >
          Sign In
        </button>
        <button
        onClick={() => setName("sign-up")}
          className={`font-cashdisplay  md:text-[24px]/[30px] text-[20px]/[24.6px] font-[500] tracking-normal text-center ${
            name === "sign-up" ? "text-white" : "text-gray-400"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* {---------- Sign Up/ Sign In Form-----------} */}
      <div
        className="w-full flex flex-col justify-center items-center gap-5  py-10"
        style={{
          background: "linear-gradient(180deg, #aed2ff 30%, #ffffff)",
        }}
      >
        {/* --- Sign UP/IN  with FB or Google --------*/}
        <div className="w-[90%] flex flex-col justify-center items-center gap-5 py-5">
          <p className="font-lexend font-[400] text-[18px]/[22.5px]">
            {name === "sign-up" ? "Sign Up with" : "Sign In with"}
          </p>
          <div className="w-full flex flex-row justify-center items-center gap-5">
            <div className="w-[50%] md:h-[70px] h-[50px] bg-white  shadow-sm flex justify-center items-center rounded-sm cursor-pointer">
              <img
                src="/svgIcons/google.svg"
                className="md:w-[48px] md:h-[48px] w-[26px] h-[26px]"
              />
            </div>
            <div className="w-[50%] md:h-[70px] h-[50px] bg-white  shadow-sm flex justify-center items-center rounded-sm cursor-pointer">
              <img
                src="/svgIcons/fb.svg"
                className="md:w-[48px] md:h-[48px] w-[26px] h-[26px]"
              />
            </div>
          </div>
        </div>

        {/* ------ Sign UP/IN  with FB or Google ------*/}

        <div className="w-full flex items-center justify-center gap-5 my-10">
          <div className="md:w-[43%] w-[35%] border-t-[1px] border-black"></div>
          <span className="text-[#000000] md:text-[18px]/[22.5px] text-[14px]/[17.5px] font-[400] font-lexend">
            Or
          </span>
          <div className="md:w-[43%] w-[35%] border-t-[1px] border-black"></div>
        </div>

        {/* ===== Form ===== */}

        {name == "sign-up" ? <SignUp /> : <SignIn />}

        {/* ===== Form ===== */}

        {/* <CustomButton>
          {name == "sign-up" ? "Sign Up" : "Sign In"}
        </CustomButton> */}

        {/* <div className="text-center text-gray-600 font-lexend text-[14px]/[17.5px] font-[300] tracking-[4%]">
          {name === "/sign-in" ? (
            <>
              <div className="flex flex-row items-center gap-2">
                <span className="text-black font-[300] text-[14px]/[17.5px] underline font-lexend">
                  Don’t have an account?{" "}
                </span>
                <Link
                  href="/sign-up"
                  className="text-black font-[500] text-[14px]/[17.5px] underline font-lexend"
                >
                  Sign Up
                </Link>
              </div>
            </>
          ) : name === "/sign-up" ? (
            <>
              <div className="flex flex-row items-center gap-2">
                <span className="text-black font-[300] text-[14px]/[17.5px] underline font-lexend">
                  Already have an account?{" "}
                </span>
                <Link
                  href="/sign-in"
                  className="text-black font-[500] text-[14px]/[17.5px] underline font-lexend"
                >
                  Sign In
                </Link>
              </div>
            </>
          ) : null}        </div> */}
      </div>
      {/* {---------------------------} */}
    </section>
  );
};

export default SignComponent;
