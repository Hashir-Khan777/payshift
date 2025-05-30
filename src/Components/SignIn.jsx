import React, { useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import CustomButton from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/actions/auth";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { data } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  const router = useRouter();

  const loginUser = () => {
    dispatch(login(loginForm));
  };

  useEffect(() => {
    if (localStorage.getItem("user") || data?.token) {
      router.push("/");
    }
  }, [localStorage.getItem("user"), data]);

  return (
    <>
      {/* ======= FORM ======== */}
      <div className="flex flex-col gap-5 mx-10 w-[90%]">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email/mobile"
            className="font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]"
          >
            Email/Mobile
          </label>
          <input
            type="email"
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            value={loginForm.email}
            className="w-full md:h-[60px] h-[40px] px-10 shadow-lg outline-none rounded-sm font-lexend"
            id="email/mobile"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="password"
            className="font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]"
          >
            Password
          </label>

          <div className="w-full flex flex-row justify-center items-center  md:h-[60px] h-[40px] rounded-sm bg-white shadow-lg">
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              value={loginForm.password}
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

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center ">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-[17px] h-[17px]"
            />
            <label
              htmlFor="rememberMe"
              className="font-lexend text-[14px]/[17.5px] font-[300] tracking-[4%] ps-2"
            >
              Remember me
            </label>
          </div>

          <div className="flex flex-row items-center gap-2">
            <div className="text-black font-[300] text-[14px]/[17.5px] underline font-lexend">
              Forgot password?
            </div>

            <Link
              href="/reset-password"
              className="text-black font-[500] text-[14px]/[17.5px] underline font-lexend"
            >
              Reset
            </Link>
          </div>
        </div>
      </div>
      {/* ======= FORM ======== */}

      {/* ==== Buttons ===== */}

      <CustomButton onClick={loginUser}>Sign In</CustomButton>

      <div className="text-center text-gray-600 font-lexend text-[14px]/[17.5px] font-[300] tracking-[4%]">
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
      </div>
      {/* ==== Buttons ===== */}
    </>
  );
};

export default SignIn;
