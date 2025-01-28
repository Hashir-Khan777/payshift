import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const ResetPassword1 = () => {

    const pathname = usePathname();


    return (
        <div className='w-full flex flex-col justify-center items-center gap-10'>

            <p className='w-[90%] font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]'>Enter your email address for verification process, a 6 digit code will be sent to your email address.</p>

            <div className='w-[90%] flex flex-col gap-3'>
                <label htmlFor="email" className='font-lexend md:text-[20px]/[25px] text-[14px]/[17.5px] font-[400] tracking-[4%]'>Enter Your Email</label>
                <input type="email" className='w-full md:h-[60px] h-[40px] px-10 shadow-lg outline-none rounded-sm font-lexend' id='email' />
            </div>

        </div>
    )
}

export default ResetPassword1
