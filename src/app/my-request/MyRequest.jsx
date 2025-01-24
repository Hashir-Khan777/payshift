"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const MyRequestSliderComponent = ({ cards, headingWhite, headingBlack, tablehead }) => {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const rowsPerPage = 10; // Rows per page
  const totalPages = Math.ceil(cards.length / rowsPerPage); // Total pages

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Calculate the data to display on the current page
  const displayedData = cards.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-[100%] flex flex-col justify-center gap-10 items-center mx-auto md:pt-32 pt-14 pb-32 overflow-hidden">
      <h1 className="text-center text-[28px] md:text-[48px] md:mb-16 mb:8 font-medium font-cashdisplay">
        <span className="text-white">{headingWhite}</span> {headingBlack}
      </h1>

      {/* ========== Buttons ========= */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full md:px-20 px-5 items-center">

        <div
          className="py-[24px] px-[20px] rounded-[4px] flex flex-row justify-between items-center gap-5 shadow-md"
          style={{
            background: "linear-gradient(90deg, #ffffff, #aed2ff)",
          }}
        >
          <span className="font-lexend md:text-[20px] text-[16px] font-[600] tracking-[4%]">
            Property Owner Name
          </span>
          <FaArrowDown className="md:text-[24px] text-[18px]" />
        </div>

        <div
          className="py-[24px] px-[20px] rounded-[4px] flex flex-row justify-between items-center gap-5 shadow-md"
          style={{
            background: "linear-gradient(90deg, #ffffff, #aed2ff)",
          }}
        >
          <span className="font-lexend md:text-[20px] text-[16px] font-[600] tracking-[4%]">
            Property Details
          </span>
          <FaArrowDown className="md:text-[24px] text-[18px]" />
        </div>

        <div className="h-[40px] md:py-8 py-6 bg-black text-white lg:w-[80%] sm:w-[50%] md:w-[50%] mx-auto rounded-full hover:bg-gray-800 md:px-10 px-5 flex items-center lg:my-0 md:my-8 mt-5">
                <button className="animated-button flex items-center justify-center gap-7 py-0 my-0 w-full font-normal  md:px-0 px-10">
                  <span className="relative text-base left-0 pl-3 md:pl-6 pr-2 md:pr-4 md:text-[32px] text-[16px] animated-text transition-all ease-linear duration-[400ms] font-lexend">
                    Search
                  </span>
                  <img
                    src="svgIcons/payicon.svg"
                    className="relative right-0 transition-all ease-linear duration-[400ms] w-[22px] h-[22px] md:w-[42px] md:h-[36px] animated-icon"
                  />
                </button>
              </div>
      </div>

      {/* Table */}
      <div className="w-[100%] overflow-x-auto md:mt-10 mt-5 mx-0 shadow-lg">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="">
              {tablehead.map((elem, index) => (
                <th
                  key={index}
                  className="px-5 py-[24px] font-lexend font-[700] tracking-wider text-white text-[14px] bg-black text-center"
                >
                  {elem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {displayedData.map((card, index) => (
              <tr key={index}>
                <td className="px-5 py-[24px] w-[100px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.no}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.buildingName}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.propertyName}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.propertyType}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.propertyPosition}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.rooms}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.amount}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.totalArea}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.currentStatus}</td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[14px] text-center">{card.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-row justify-between items-center min-w-[98%] md:px-20 px-5">
        <div>
          <p className="md:text-[16px] text-[12px] font-[500] whitespace-nowrap w-[20vw] font-lexend text-gray-600">
            Showing {currentPage * rowsPerPage - rowsPerPage + 1}-
            {Math.min(currentPage * rowsPerPage, cards.length)} of {cards.length} Results
          </p>
        </div>

        <div className="flex justify-end items-end gap-4 container">
          <button
            className="text-3xl"
            aria-label="Scroll Left"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <img
              className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
              src="/svgIcons/slidericonleft.svg"
            />
          </button>
          <button
            className="text-3xl"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <img
              className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
              src="/svgIcons/slidericon.svg"
            />
          </button>
        </div>
      </div>

    </div>
  );
};

export default MyRequestSliderComponent;
