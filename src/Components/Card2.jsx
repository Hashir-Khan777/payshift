import React from "react";
import { BsBank2 } from "react-icons/bs";
import { FaCcApplePay } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";

// This Card is For Payment Method in Customer Profile

const paymentMethods = [
  { id: 1, name: "Card", icon: "/svgIcons/card.svg", isImg: true },
  { id: 2, name: "Bank", icon:"/svgIcons/bank2.svg", isImg: true },
  { id: 3, name: "ApplePay", icon:"/svgIcons/applePay.svg", isImg: true },
  { id: 4, name: "PayPal", icon: "/svgIcons/payPal.svg", isImg: true },
];

function Card2({ headingBlack, headingWhite }) {
  return (
    <div
      className="w-full bg-blue-300 mx-auto flex flex-col md:py-10 py-5 md:gap-14 gap-5 justify-between md:items-center items-start px-5 border-2 border-white rounded-[4px]"
      style={{
        background: "linear-gradient(0deg, #FFFFFF33 20%, #FFFFFF)",
        boxShadow: "2px 2px 5px 5px rgba(0,0,0,0.1)",
      }}
    >
      {/* Heading */}
      <h1 className="text-center text-[14px] md:text-4xl font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>

      {/* Payment Methods */}
      <div className="w-full flex flex-row flex-wrap md:justify-center gap-2 md:gap-10 justify-start sm:gap-4 px-3">

  {paymentMethods.map((method) => (
    <div
      key={method.id}
      className="rounded-[4px] shadow-lg w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[200px] md:h-[200px] flex flex-col justify-center items-center md:gap-[20px] gap-[8px] md:py-[40px]"
      style={{ background: "linear-gradient(180deg,#ffffff 70%, #aed2ff )",
              boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.2)",
         }}
    >
      {method.isImg ? (
        <img className="w-6 md:w-[81px] md:h-[83px] sm:w-[24px] sm:h-[24px]" src={method.icon} alt={method.name} />
      ) : (
        <method.icon className="w-6 md:w-[81px] md:h-[83px] sm:w-[24px] sm:h-[24px] text-[#030055]" />
      )}
      <span className="text-[10px] sm:text-[12px] md:text-[20px] font-medium font-lexend">
        {method.name}
      </span>
    </div>
  ))}
</div>


    </div>
  );
}

export default Card2;
