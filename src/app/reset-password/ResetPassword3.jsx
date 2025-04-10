import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";

const ResetPassword3 = ({ form, setForm }) => {
  const pathname = usePathname();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-10 gap-5">
      <p className="w-[90%] font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]">
        Your new password must be different than your last. The password must
        include:
      </p>

      <ul className="w-[90%] font-lexend md:text-[20px]/[25px] font-[600] list-disc ml-7">
        <li>Min 8 Characters</li>
        <li className="my-3">Min 1 Upper Case & 1 Lowercase</li>
        <li>Min 1 Number</li>
      </ul>

      <div className="flex flex-col gap-5 w-[90%]">
        <label
          htmlFor="password"
          className="font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]"
        >
          Enter New Password
        </label>

        <div className="w-full flex flex-row justify-center items-center md:h-[60px] h-[40px] rounded-sm bg-white shadow-lg">
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
            className="md:w-[95%] w-[85%] h-full px-10  outline-none font-lexend"
            id="password"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)} // Toggle state
            className="text-black md:w-[5%] w-[15%] h-full text-center align-middle  transition-colors duration-200 px-3"
          >
            {showPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-[90%]">
        <label
          htmlFor="confirmPassword"
          className="font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]"
        >
          Confirm New Password
        </label>

        <div className="w-full flex flex-row justify-center items-center  md:h-[60px] h-[40px] rounded-sm bg-white shadow-lg">
          <input
            type={showConfirmPassword ? "text" : "password"}
            onChange={(e) =>
              setForm({ ...form, comfirmPassword: e.target.value })
            }
            value={form.comfirmPassword}
            className="md:w-[95%] w-[85%] h-full px-10  outline-none font-lexend"
            id="confirmPassword"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)} // Toggle state
            className="text-black md:w-[5%] w-[15%] h-full text-center align-middle  transition-colors duration-200 px-3"
          >
            {showConfirmPassword ? (
              <BsEye size={20} />
            ) : (
              <BsEyeSlash size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword3;
