import React from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import Link from 'next/link';

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return (
        <>
            {/* ======= FORM ======== */}
            <div className='flex flex-col gap-5 mx-10 w-[90%]'>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="email/mobile" className='font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]'>Email/Mobile</label>
                    <input type="email" className='w-full md:h-[60px] h-[40px] px-10 shadow-lg outline-none rounded-sm font-lexend' id='email/mobile' />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="password" className='font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]'>Password</label>

                    <div className='w-full flex flex-row justify-center items-center  md:h-[60px] h-[40px] rounded-sm bg-white shadow-lg'>
                        <input type={showPassword ? 'text' : 'password'} className='md:w-[95%] w-[85%] h-full px-10  outline-none font-lexend' id='password' />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)} // Toggle state
                            className="text-black md:w-[5%] w-[15%] h-full text-center align-middle  transition-colors duration-200 px-3"
                        >
                            {showPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
                        </button>
                    </div>

                </div>

                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-center items-center '>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className='font-lexend text-[14px]/[17.5px] font-[300] tracking-[4%] ps-2'>Remember me

                        </label>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                    <p className='font-lexend text-[14px]/[17.5px] font-[300] tracking-[4%]'>Forgot password?</p>
                    <Link href='/sign-in' className='text-black font-medium text-[15px] ps-2 underline font-lexend'>Reset</Link>
                    </div>


                </div>


            </div>
            {/* ======= FORM ======== */}
        </>
    )
}

export default SignIn
