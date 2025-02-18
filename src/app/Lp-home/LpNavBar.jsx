// "use client"
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa"; // Close icon
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
// import { RiContactsFill } from "react-icons/ri";

// const LpNavbar = () => {

//   const [mobNav, setMobNav] = useState(false)

//   return (
//     <nav className="bg-white w-full z-50 top-0 start-0 drop-shadow-lg md:px-[64px] px-[10px]" >
//       <div className="container h-[100px] flex flex-wrap items-center px-5 md:px-0 justify-between mx-auto py-4">
//         <Link
//           href="/"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <img src="/Images/logo.svg" className=" h-[40px]" alt="Logo" />
//         </Link>

//         <div className="md:flex hidden flex-row lg:gap-[40px] gap-[20px] text-xl font-bold ">
//           <Link href="/" className="text-[20px]/[25px] font-[600] font-lexend">Home</Link>
//           <img src="/Images/divider.svg" alt="divider" />
//           <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Services</Link>
//           <img src="/Images/divider.svg" alt="divider" />
//           <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Contact</Link>
//           <img src="/Images/divider.svg" alt="divider" />
//           <div className="flex justify-center items-center gap-[12px]">
//             <Link href="/" className="text-[18px]/[22.14px] font-[600] font-cashdisplay text-[#030055]">Payment Portal</Link>
//             <img src="/Images/LpNavicon.svg" alt="divider" />
//           </div>
//         </div>

//         {/* Button for smaller screens
//         <div className="md:hidden block" onClick={() => (setMobNav(!mobNav))}>
//           <img src="/Images/menuBtn.svg" alt="" />
//         </div>

//         {/* Nav for smaller screens
//         {
//           mobNav ? (
//             <div className="w-full h-full bg-red-700">

//             </div>
//           ) : ""
//         } */}

//           {/* Mobile Menu Button */}
//           <div className="md:hidden block" onClick={() => setMobNav(true)}>
//           <img src="/Images/menuBtn.svg" alt="Menu" />
//         </div>

//         {/* Mobile Navigation (Full-Screen Overlay) */}
//         {mobNav && (
//           <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex ">
//             {/* Sidebar */}
//             <div className="w-[75%] sm:w-[60%] md:w-[40%] h-full bg-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out translate-x-0">
//               {/* Close Button */}
//               <button className="self-end text-2xl" onClick={() => setMobNav(false)}>
//                 <FaTimes />
//               </button>

//               {/* Mobile Links */}
//               <nav className="flex flex-col space-y-4 text-lg font-bold">
//                 <Link href="/" className="py-2 px-4 text-black" onClick={() => setMobNav(false)}>Home</Link>
//                 <Link href="/" className="py-2 px-4 text-gray-600" onClick={() => setMobNav(false)}>Services</Link>
//                 <Link href="/" className="py-2 px-4 text-gray-600" onClick={() => setMobNav(false)}>Contact</Link>
//                 <Link href="/" className="py-2 px-4 text-[#030055] font-[600]" onClick={() => setMobNav(false)}>Payment Portal</Link>
//               </nav>
//             </div>

//             {/* Close when clicking outside */}
//             <div className="w-[25%] sm:w-[40%] md:w-[60%] h-full" onClick={() => setMobNav(false)}></div>
//           </div>
//         )}
//       </div>

//       {/* </div> */}
//     </nav>
//   );
// };

// export default LpNavbar;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Close icon

const LpNavbar = () => {
  const [mobNav, setMobNav] = useState(false);

  return (
    <nav className="bg-white w-full z-50 fixed top-0 left-0 drop-shadow-lg md:px-[64px] px-[10px]">
      <div className="container h-[100px] flex flex-wrap items-center px-5 md:px-0 justify-between mx-auto py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/Images/logo.svg" className="h-[40px]" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="md:flex hidden flex-row lg:gap-[40px] gap-[20px] text-xl font-bold">
          <Link href="/" className="text-[20px]/[25px] font-[600] font-lexend">
            Home
          </Link>
          <img src="/Images/divider.svg" alt="divider" />
          <Link
            href="/"
            className="text-[20px]/[25px] font-[500] font-lexend text-gray-600"
          >
            Services
          </Link>
          <img src="/Images/divider.svg" alt="divider" />
          <Link
            href="/"
            className="text-[20px]/[25px] font-[500] font-lexend text-gray-600"
          >
            Contact
          </Link>
          <img src="/Images/divider.svg" alt="divider" />
          <div className="flex justify-center items-center gap-[12px]">
            <Link
              href="/"
              className="text-[18px]/[22.14px] font-[600] font-cashdisplay text-[#030055]"
            >
              Payment Portal
            </Link>
            <img src="/Images/LpNavicon.svg" alt="divider" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden block" onClick={() => setMobNav(true)}>
          <img src="/svgIcons/menuBtn.svg" alt="Menu" />
        </div>

        {/* Mobile Navigation (Full-Screen Overlay) */}
        {mobNav && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex">
            {/* Sidebar */}
            <div className="w-[75%] sm:w-[60%] md:w-[40%] h-full bg-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out translate-x-0">
              {/* Close Button */}
              <button
                className="self-end text-2xl"
                onClick={() => setMobNav(false)}
              >
                <FaTimes />
              </button>

              {/* Mobile Links */}
              <nav className="flex flex-col space-y-4 text-lg font-bold bg-white h-[100vw] w-[300px]">
                <Link
                  href="/"
                  className="py-2 px-4 text-black"
                  onClick={() => setMobNav(false)}
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="py-2 px-4 text-gray-600"
                  onClick={() => setMobNav(false)}
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="py-2 px-4 text-gray-600"
                  onClick={() => setMobNav(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  className="py-2 px-4 text-[#030055] font-[600]"
                  onClick={() => setMobNav(false)}
                >
                  Payment Portal
                </Link>
              </nav>
            </div>

            {/* Click outside to close */}
            <div
              className="w-[25%] sm:w-[40%] md:w-[60%] h-full"
              onClick={() => setMobNav(false)}
            ></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LpNavbar;
