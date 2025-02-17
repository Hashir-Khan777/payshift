import React from "react";
import { twMerge } from "tailwind-merge";

const CustomButton = ({
  children,
  onClick,
  btnClass,
  textClass,
  iconClass,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `animated-button flex items-center gap-7 px-5 py-2  text-black font-normal rounded-full border-[2.5px] border-black`,
        btnClass ?? ""
      )}
    >
      <span
        className={twMerge(
          `relative flex-1 font-medium text-base left-0 pl-3 md:pl-6 pr-2 md:pr-4 md:text-3xl animated-text transition-all ease-linear duration-[400ms] font-lexend`,
          textClass ?? ""
        )}
      >
        {children}
      </span>
      <img
        src="/svgIcons/payiconBlack.svg"
        className={twMerge(
          `relative right-0 transition-all ease-linear duration-[400ms] w-[22px] h-[22px] md:w-[42px] md:h-[42px] animated-icon`,
          iconClass ?? ""
        )}
      />
    </button>
  );
};

export default CustomButton;
