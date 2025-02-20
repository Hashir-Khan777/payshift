// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa"; // Close icon
// import { RxDividerHorizontal } from "react-icons/rx";
// import { IoCloseOutline } from "react-icons/io5";

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
//             <Link href="#products" className="text-[20px]/[25px] font-[600] font-lexend">Product</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Services</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <Link href="/" className="text-[20px]/[25px] font-[500] font-lexend text-gray-600">Contact</Link>
//             <img src="/Images/divider.svg" alt="divider" />
//             <div className="flex justify-center items-center gap-[12px]">
//               <Link href="/" className="text-[18px]/[22.14px] font-[600] font-cashdisplay text-[#030055]">
//                 Developers
//               </Link>
//               <img src="/Images/LpNavicon.svg" alt="Payment Portal" />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden block" onClick={() => setMobNav(true)}>
//             <img src="/Images/menuBtn.svg" alt="Menu" />
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation (Full-Screen Overlay) */}
//       {mobNav && (
//         <div

//           className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex"
//         >
//           {/* Sidebar (Full-Screen) */}
//           <div className="w-[100vw] sm:w-[300px] h-full bg-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out bg-bottom bg-cover bg-no-repeat"
//           style={{
//             backgroundImage: "url('/Lpbg1.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}>
//             {/* Close Button */}
//             <button className="self-end text-3xl" onClick={() => setMobNav(false)}>
//               {/* <FaTimes /> */}
//               <IoCloseOutline />
//             </button>

//             {/* Mobile Links */}
//             <nav className="flex flex-col justify-center items-center gap-[40px]">
//               <Link href="/" className="text-black font-lexend font-[600] text-[24px]/[30px]" onClick={() => setMobNav(false)}>Home</Link>
//               <div className="w-[48px] border-t border-[1px] border-gray-700 my-4"></div>
//               <Link href="#products" className="text-black font-lexend font-[600] text-[24px]/[30px]" onClick={() => setMobNav(false)}>Product</Link>
//               <div className="w-[48px] border-t border-[1px] border-gray-700 my-4"></div>
//               <Link href="/" className="text-black font-lexend font-[500] text-[24px]/[30px]" onClick={() => setMobNav(false)}>Services</Link>
//               <div className="w-[48px] border-t border-[1px] border-gray-700 my-4"></div>
//               <Link href="/" className="text-black font-lexend font-[500] text-[24px]/[30px]" onClick={() => setMobNav(false)}>Contact</Link>
//               <div className="w-[48px] border-t border-[1px] border-gray-700 my-4"></div>
//               {/* <Link href="/" className="text-black font-cashdisplay font-[500] text-[24px]/[30px]" >Payment Portal</Link> */}
//               <div className="flex justify-center items-center gap-[12px]">
//               <Link href="/" className="text-[24px]/[29px] font-[600] font-cashdisplay text-[#030055]" onClick={() => setMobNav(false)}>
//                 Payment Portal
//               </Link>
//               <img src="/Images/LpNavicon.svg" alt="Payment Portal" />
//             </div>
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

// Navbar 2

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const LpNavbar = () => {
  const [mobNav, setMobNav] = useState(false);
  const [activeSection, setActiveSection] = useState("#home"); // Default active: Home
  const pathname = usePathname(); // Get current route

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    // { name: "Contact", href: "/contact" },
  ];

  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "/Lp-home"; // Default to Home if no section is in view
      navLinks.forEach((link) => {
        if (link.href.startsWith("#")) {
          const section = document.querySelector(link.href);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = link.href;
            }
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling for section links
  const handleNavigation = (event, href) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        const offset =
          section.getBoundingClientRect().top + window.scrollY - 80; // Adjust for fixed navbar
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
      setMobNav(false); // Close mobile menu after clicking
    }
  };

  return (
    <header>
      {/* Desktop Navigation */}
      <nav className="bg-white w-full z-50 fixed top-0 left-0 drop-shadow-lg md:px-[64px] px-[10px]">
        <div className="container h-[100px] flex flex-wrap items-center px-5 md:px-0 justify-between mx-auto py-4">
          {/* Logo */}
          <Link href="/Lp-home" className="flex items-center space-x-3">
            <img src="/Images/logo.png" className="h-[40px]" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row lg:gap-[40px] gap-[20px] text-xl font-bold">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  href={link.href}
                  className={`text-[20px]/[25px] font-lexend ${
                    pathname === link.href || activeSection === link.href
                      ? "font-[600]"
                      : "font-[500] text-gray-600"
                  }`}
                  onClick={(e) => handleNavigation(e, link.href)}
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <img src="/Images/divider.svg" alt="divider" />
                )}
              </React.Fragment>
            ))}

            <img src="/Images/divider.svg" alt="divider" />
            <div className="flex justify-center items-center gap-4">
              <Link
                href="https://api.paydart.co/"
                target="_blank"
                className="text-[24px] font-[600] font-cashdisplay text-[#030055]"
                onClick={() => setMobNav(false)}
              >
                DEVELOPERS
              </Link>
              <img src="/Images/LpNavicon.svg" alt="Payment Portal" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden block" onClick={() => setMobNav(true)}>
            <img src="/Images/menubtn.svg" alt="Menu" />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (Full-Screen Overlay) */}
      {/* {mobNav && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex justify-center items-center">
          Full-Screen Menu
          <div
            className="w-full h-full bg-white flex flex-col items-center justify-center gap-6 p-6 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/Lpbg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Close Button
            <button className="absolute top-6 right-6 text-3xl" onClick={() => setMobNav(false)}>
              <IoCloseOutline />
            </button>

            Mobile Links
            <nav className="w-full flex flex-col items-center justify-center text-center gap-6">
              {navLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={link.href}
                    className={`text-black font-lexend text-[24px]/[30px] ${pathname === link.href || activeSection === link.href
                      ? "font-[600]"
                      : "font-[500]"
                      }`}
                    onClick={(e) => handleNavigation(e, link.href)}
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="w-[48px] border-t border-[1px] border-gray-700 my-2"></div>
                  )}

                </React.Fragment>
              ))}
              <div className="mx-auto flex flex-col justify-center items-center gap-[24px] text-center">
                <div className="w-[48px] border-t border-[1px] border-gray-700 my-2"></div>
                <div className="flex justify-center items-center gap-4">
                  <Link href="/" className="text-[24px] font-[600] font-cashdisplay text-[#030055]" onClick={() => setMobNav(false)}>
                    Developers
                  </Link>
                  <img src="/Images/LpNavicon.svg" alt="Payment Portal" />
                </div>
              </div>

            </nav>
          </div>
        </div>
      )} */}

      {mobNav && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex justify-center items-center">
          {/* Full-Screen Menu */}
          <div
            className="w-full h-full bg-white flex flex-col items-center justify-center gap-6 p-6 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: "url('/Lpbg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-3xl"
              onClick={() => setMobNav(false)}
            >
              <IoCloseOutline />
            </button>

            {/* Mobile Links */}
            <nav className="w-full flex flex-col items-center justify-center text-center gap-6">
              {navLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={`${link.href}`}
                    className={`text-black font-lexend text-[24px]/[30px] ${
                      pathname === link.href || activeSection === link.href
                        ? "font-[600]"
                        : "font-[500]"
                    }`}
                    onClick={() => setMobNav(false)}
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="w-[48px] border-t border-[1px] border-gray-700 my-2"></div>
                  )}
                </React.Fragment>
              ))}
              {/* 🔹 MODIFIED: Moved "Developers" section inside the nav and applied the same spacing */}
              <div className="w-[48px] border-t border-[1px] border-gray-700 my-2"></div>{" "}
              {/* Added border for consistency */}
              {/* 🔹 MODIFIED: Centered Developers link and made spacing uniform */}
              <Link
                href="https://api.paydart.co/"
                target="_blank"
                className="text-[24px] font-[600] font-cashdisplay text-[#030055] flex items-center gap-4 uppercase"
                onClick={() => setMobNav(false)}
              >
                Developers
                <img src="/Images/LpNavicon.svg" alt="Developers" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default LpNavbar;
