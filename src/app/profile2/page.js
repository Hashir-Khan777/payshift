import Profile2 from '@/Components/Profile2'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import Footer from '@/Components/Footer';


function page() {
  return (
    <>
    <div className="w-full bg-[#ffffff] py-5 flex flex-row justify-start items-center gap-3 px-4 md:ps-16 ps-6 cursor-pointer">
          <FaArrowLeft className="md:w-[20px] w-[15.28px] md:h-[20px] h-[15.22px]" />
          <p className="text-black md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
            Go Back
          </p>
        </div>
    <section className='w-full min-h-[100vh]'
    style={{background:"linear-gradient(45deg, #8ABEFF 20%, #ffffff)"}}
    >
        <Profile2 />
    </section>
    <Footer />
    </>
  )
}

export default page
