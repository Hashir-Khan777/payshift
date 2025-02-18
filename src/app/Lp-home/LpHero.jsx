// import React from "react";
// import localFont from "next/font/local";
// import CustomButton from "../../Components/Button";
// import CustomButton2 from "../../Components/Button2";

// const cashdisplay = localFont({
//   src: "../../fonts/ClashDisplay-Variable.ttf",
//   variable: "--clashvariable",
// });

// const LpHero = () => {
//   return (
//     <section className="relative w-full min-h-[100vh] bg-cover bg-no-repeat bg-center md:mt-10 mt-20"
//     style={{
//       backgroundImage:"url('/Lpbg1.png')"
//     }}
//     >
//       {/* Background Image */}
//       {/* <img
//         className="w-full h-[calc(100vh-100px)] object-cover object-center"
//         src="/Lpbg1.png"
//         alt="Background"
//       /> */}

//       {/* Centered Content */}
//       <div
//         className="absolute inset-0 flex flex-col-reverse sm1:flex-row items-center sm2:justify-center justify-end z-10 h-full w-full px-[100px] md:py-[100px]"
//         style={{
//           top: "5%",
//           transform: "translateY(5%)",
//         }}
//       >
//         {/* ==== Card Starts ===== */}

//         <div
//           className=" relative lg:top-0 lg:left-24 md:-left-8 md:-top-14 md:w-[600px] md:h-[500px] lg:w-[666px] lg:h-[600px] sm2:w-[366px] h-[300px] w-[320px] sm:h-[744px] md:px-[40px] md:py-[40px] lg:px-[40px] lg:py-[15px] px-[10px] pt-[30px] pb-[50px]"
//           style={{
//             background: "url('/Images/herobg.png') no-repeat",
//             filter: "drop-shadow(1px 1px 55px rgba(41, 0, 128, 0.4))",
//           }}
//         >
//           <div className="flex flex-col justify-center items-center md:gap-[40px] gap-[15px] lg:py-[20px] lg:px-[100px]">
//             {/* ==== Card Content ===== */}
//             <h1
//               className={`text-black text-[24px] sm:text-[20px]  md:text-[35px] lg:text-[54px]/[60.72px] font-medium text-center font-cashdisplay`}
//             >
//               Shift To <br/><span className="text-white px-2">Effortless</span>
//               <br/>
//              Payment
//             </h1>
//             <div className="flex flex-col gap-[20px]">
//               <CustomButton>Sign Up</CustomButton>
//               <CustomButton2>Connect</CustomButton2>
//             </div>
//           </div>

//         </div>
//         {/* ==== Card Ends ===== */}

//         {/* ==== Responsive GIF ==== */}
//         <div className="relative bg-red-500 z-10 lg:-top-16 lg:right-36 lg:w-[40%] md:w-[700px] sm2:w-[50%] sm:left-16 md:left-0 object-cover text-start">
//           <img
//             src="/lpHero.gif"
//             className="w-full h-auto "
//             alt="PayShift GIF"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LpHero;


import React from "react";
import localFont from "next/font/local";
import CustomButton from "../../Components/Button";
import CustomButton2 from "../../Components/Button2";

const cashdisplay = localFont({
  src: "../../fonts/ClashDisplay-Variable.ttf",
  variable: "--clashvariable",
});

const LpHero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-no-repeat sm:bg-center bg-left-top flex items-center justify-center md:mt-10 mt-20 px-4 sm:py-10 py-20"
      style={{ backgroundImage: "url('/Lpbg1.png')" }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl ">

        {/* Card Section */}
        <div
          className="relative lg:left-10 md:left-9 hidden md:flex sm:gap-0 gap-10 flex-col justify-center items-center w-full lg:h-[500px] h-[400px] sm:w-1/2 max-w-md md:max-w-lg lg:max-w-xl p-6 md:p-10 bg-no-repeat bg-cover shadow-lg"
          style={{
            backgroundImage: "url('/Images/herobg.png')",
            filter: "drop-shadow(1px 1px 55px rgba(41, 0, 128, 0.4))",
          }}
        >
          <h1
            className={`text-black text-2xl sm:text-xl md:text-3xl lg:text-5xl font-medium text-center font-cashdisplay`}
          >
            Shift To <br />
            <span className="text-white px-2">Effortless</span>
            <br /> Payment
          </h1>
          <div className="flex flex-col gap-4 mt-6">
            <CustomButton>Sign Up</CustomButton>
            <CustomButton2>Connect</CustomButton2>
          </div>
        </div>

        {/* FOr SMaller Screens */}
        <div className="w-[250px] md:hidden flex flex-col gap-[24px] justify-center items-center">
        <h1
            className={`text-black text-2xl sm:text-xl md:text-3xl lg:text-5xl font-medium text-center font-cashdisplay`}
          >
            Shift To <br />
            <span className="text-white px-2">Effortless</span>
            Payment
          </h1>
          <div className="flex flex-col gap-4 mt-6 w-[200px]">
            <CustomButton>Sign Up</CustomButton>
            <CustomButton2>Connect</CustomButton2>
          </div>
        </div>
        {/* FOr SMaller Screens */}
        
        {/* Image Section */}
        <div className="relative  md:right-8 lg:right-10 w-full sm:w-1/2 max-w-md md:max-w-lg lg:max-w-xl flex justify-center">
          <img src="/lpHero.gif" className="w-full h-auto object-cover" alt="PayShift GIF" />
        </div>
      </div>
    </section>
  );
};

export default LpHero;
