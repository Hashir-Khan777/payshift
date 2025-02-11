"use client";

import { useState, useRef } from "react";
// import { Button } from '@/components/ui/button';

export default function ResetPassword2t() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // const handleSubmit = () => {
  //     alert(`Entered OTP: ${otp.join('')}`);
  // };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="w-[90%] font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]">
        Enter the 6-digit code sent to your email
      </p>

      <div className="w-[90%] flex flex-col gap-5">
        <label
          htmlFor="email"
          className="font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%] mt-10"
        >
          Enter Code
        </label>
        <div className=" flex flex-row gap-3 justify-between items-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="md:w-[160px] w-[17%]  md:h-[100px] h-[40px] text-center md:text-[32px]/[40px] text-[20px]/[25px] font-[600] font-lexend border rounded-sm shadow-lg outline-none"
            />
          ))}
        </div>
      </div>

      <p className="w-[90%] text-[14px]/[17.5px] font-lexend font-[300] text-[#000000] mb-4 mt-5">
        Haven’t Receive The Code?{" "}
        <span className="cursor-pointer font-lexend font-[500] underline">
          Resend
        </span>
      </p>
    </div>
  );
}
