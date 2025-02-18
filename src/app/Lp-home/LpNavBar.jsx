// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa"; // Close icon

// const LpNavbar = () => {
//   const [mobNav, setMobNav] = useState(false);

//   return (
//     <header>
//       {/* Desktop Navigation */}
//       <nav className="bg-white w-full z-50 fixed top-0 left-0 drop-shadow-lg md:px-[64px] px-[10px]">
//         <div className="container h-[100px] flex flex-wrap items-center px-5 md:px-0 justify-between mx-auto py-4">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="/Images/logo.svg" className="h-[40px]" alt="Logo" />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="md:flex hidden flex-row lg:gap-[40px] gap-[20px] text-xl font-bold">
//             <Link href="/" className="text-[20px]/[25px] font-[600] font-lexend">Home</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Services</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Contact</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <div className="flex justify-center items-center gap-[12px]">
//               <Link href="/" className="text-[18px]/[22.14px] font-[600] font-cashdisplay text-[#030055]">
//                 Payment Portal
//               </Link>
//               <img src="/Images/LpNavicon.svg" alt="divider" />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden block" onClick={() => setMobNav(true)}>
//             <img src="/Images/menuBtn.svg" alt="Menu" />
//           </div>
//         </div>
//       </nav>

//        {/* Desktop Navigation */}

//       {/* Mobile Navigation (Full-Screen Overlay) */}
//       {mobNav && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex">
//           {/* Sidebar */}
//           <div className="w-full h-full bg-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out">
//             {/* Close Button */}
//             <button className="self-end text-2xl" onClick={() => setMobNav(false)}>
//               <FaTimes />
//             </button>

//             {/* Mobile Links */}
//             <nav className="flex flex-col space-y-4 text-lg font-bold">
//               <Link href="/" className="py-2 px-4 text-black" onClick={() => setMobNav(false)}>Home</Link>
//               <Link href="/" className="py-2 px-4 text-gray-600" onClick={() => setMobNav(false)}>Services</Link>
//               <Link href="/" className="py-2 px-4 text-gray-600" onClick={() => setMobNav(false)}>Contact</Link>
//               <Link href="/" className="py-2 px-4 text-[#030055] font-[600]" onClick={() => setMobNav(false)}>Payment Portal</Link>
//             </nav>
//           </div>

//           {/* Click outside to close */}
//           <div className="w-[25%] sm:w-[40%] md:w-[60%] h-full" onClick={() => setMobNav(false)}></div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default LpNavbar;



// 2nd Navbar

// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa"; // Close icon

// const LpNavbar = () => {
//   const [mobNav, setMobNav] = useState(false);

//   return (
//     <header>
//       {/* Desktop Navigation */}
//       <nav className="bg-white w-full z-50 fixed top-0 left-0 drop-shadow-lg md:px-[64px] px-[10px]">
//         <div className="container h-[100px] flex flex-wrap items-center px-5 md:px-0 justify-between mx-auto py-4">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="/Images/logo.svg" className="h-[40px]" alt="Logo" />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="md:flex hidden flex-row lg:gap-[40px] gap-[20px] text-xl font-bold">
//             <Link href="/" className="text-[20px]/[25px] font-[600] font-lexend">Home</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Services</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Contact</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <div className="flex justify-center items-center gap-[12px]">
//               <Link href="/" className="text-[18px]/[22.14px] font-[600] font-cashdisplay text-[#030055]">
//                 Payment Portal
//               </Link>
//               <img src="/Images/LpNavicon.svg" alt="divider" />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden block" onClick={() => setMobNav(true)}>
//             <img src="/Images/menuBtn.svg" alt="Menu" />
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation (Full-Screen Overlay) */}
//       <div style={{
//               backgroundImage: "url('./Images/navbg.png')"
//             }}>


//         {mobNav && (
//           <div className="fixed top-0 left-0 w-[100vw] h-full bg-black bg-opacity-50 z-[9999] flex"
//             >
//             {/* Sidebar (Full-Screen) */}
//             <div className="w-full h-full bg-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out">
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


//             {/* Click outside to close */}
//             <div className="w-[25%] sm:w-[40%] md:w-[60%] h-full" onClick={() => setMobNav(false)}></div>
//           </div>
       
        
//       )}
//       </div>
//     </header>
//   );
// };

// export default LpNavbar;

// 3rd navbar 
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Close icon
import { RxDividerHorizontal } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const LpNavbar = () => {
  const [mobNav, setMobNav] = useState(false);

  return (
    <header>
      {/* Desktop Navigation */}
      <nav className="bg-white w-full z-50 fixed top-0 left-0 drop-shadow-lg md:px-[64px] px-[10px]">
        <div className="container h-[100px] flex flex-wrap items-center px-5 md:px-0 justify-between mx-auto py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/Images/logo.svg" className="h-[40px]" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="md:flex hidden flex-row lg:gap-[40px] gap-[20px] text-xl font-bold">
            <Link href="/" className="text-[20px]/[25px] font-[600] font-lexend">Home</Link>
            <img src="/Images/divider.svg" alt="divider" />
            <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Services</Link>
            <img src="/Images/divider.svg" alt="divider" />
            <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Contact</Link>
            <img src="/Images/divider.svg" alt="divider" />
            <div className="flex justify-center items-center gap-[12px]">
              <Link href="/" className="text-[18px]/[22.14px] font-[600] font-cashdisplay text-[#030055]">
                Payment Portal
              </Link>
              <img src="/Images/LpNavicon.svg" alt="Payment Portal" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden block" onClick={() => setMobNav(true)}>
            <img src="/Images/menuBtn.svg" alt="Menu" />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (Full-Screen Overlay) */}
      {mobNav && (
        <div
          
          className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex"
        >
          {/* Sidebar (Full-Screen) */}
          <div className="w-[100vw] sm:w-[300px] h-full bg-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out bg-bottom bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/Lpbg1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            {/* Close Button */}
            <button className="self-end text-3xl" onClick={() => setMobNav(false)}>
              {/* <FaTimes /> */}
              <IoCloseOutline />
            </button>

            {/* Mobile Links */}
            <nav className="flex flex-col justify-center items-center gap-[40px]">
              <Link href="/" className="text-black font-lexend font-[600] text-[24px]/[30px]" onClick={() => setMobNav(false)}>Home</Link>
              <div className="w-[48px] border-t border-[1px] border-gray-700 my-4"></div>
              <Link href="/" className="text-black font-lexend font-[500] text-[24px]/[30px]" onClick={() => setMobNav(false)}>Services</Link>
              <div className="w-[48px] border-t border-[1px] border-gray-700 my-4"></div>
              <Link href="/" className="text-black font-lexend font-[500] text-[24px]/[30px]" onClick={() => setMobNav(false)}>Contact</Link>
              <div className="w-[48px] border-t border-[1px] border-gray-700 my-4"></div>
              {/* <Link href="/" className="text-black font-cashdisplay font-[500] text-[24px]/[30px]" >Payment Portal</Link> */}
              <div className="flex justify-center items-center gap-[12px]">
              <Link href="/" className="text-[24px]/[29px] font-[600] font-cashdisplay text-[#030055]" onClick={() => setMobNav(false)}>
                Payment Portal
              </Link>
              <img src="/Images/LpNavicon.svg" alt="Payment Portal" />
            </div>
            </nav>
          </div>

          {/* Click outside to close */}
          <div className="w-[25%] sm:w-[40%] md:w-[60%] h-full" onClick={() => setMobNav(false)}></div>
        </div>
      )}
    </header>
  );
};

export default LpNavbar;
