"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import CustomButton from "./Button";

const MyReportSliderComponent = ({
  cards,
  headingWhite,
  headingBlack,
  tablehead,
}) => {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const rowsPerPage = 10; // Rows per page
  const totalPages = Math.ceil((cards?.length || 0) / rowsPerPage); // Total pages

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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full md:px-20 px-5 items-center">
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

        <CustomButton btnClass="md:w-[310px] w-full mx-auto">
          Search
        </CustomButton>
      </div>

      {/* Table */}
      <div className="w-[100%] overflow-x-auto md:mt-10 mt-5 mx-0 shadow-lg">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="">
              {tablehead.map((elem, index) => (
                <th
                  key={index}
                  className="px-5 py-[24px] font-lexend font-[700] tracking-wider text-white text-[20px] bg-black text-center"
                >
                  {elem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {displayedData.map((card, index) => (
              <tr key={index}>
                <td className="px-5 py-[24px] w-[100px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.no}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.buildingName}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.propertyName}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.propertyType}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.propertyPosition}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.rooms}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.amount}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.totalArea}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.currentStatus}
                </td>
                <td className="px-5 py-[24px] font-lexend font-[500] tracking-wider text-[16px] text-center">
                  {card.action}
                </td>
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
            {Math.min(currentPage * rowsPerPage, cards.length)} of{" "}
            {cards.length} Results
          </p>
        </div>

        <div className="flex justify-end items-end gap-4 container">
          <button
            className="text-3xl disabled:opacity-50"
            aria-label="Scroll Left"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <img
              className="w-[34px] h-[34px] md:w-[48px] md:h-[48px] rotate-180"
              src="/svgIcons/slidericon.svg"
            />
          </button>
          <button
            className="text-3xl disabled:opacity-50"
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

      <div className="flex flex-wrap flex-row justify-between md:mt-20 mt-10 w-[100vw] md:px-20 px-5">
        <div className="flex flex-row gap-5 flex-1">
          <CustomButton btnClass="w-full lg:w-auto">Print</CustomButton>
          <CustomButton btnClass="w-full lg:w-auto">Export</CustomButton>
        </div>

        <CustomButton btnClass="w-full lg:w-auto mt-3 lg:mt-0">
          Download pdf
        </CustomButton>
      </div>
    </div>
  );
};

export default MyReportSliderComponent;
