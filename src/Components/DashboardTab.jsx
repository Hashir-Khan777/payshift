import React from "react";
import SliderComponent from "./SliderComponent";
import DasboardSliderComponent from "./DashboardSliderComponent";

const directDebitData = [
  {
    title: "John Smith",
    ref_no: "PRO800",
    start_date: "12-May-2025",
    status: "Pending",
  },
  {
    title: "John Smith",
    ref_no: "PRO800",
    start_date: "12-May-2025",
    status: "Pending",
  },
  {
    title: "John Smith",
    ref_no: "PRO800",
    start_date: "12-May-2025",
    status: "Pending",
  },
  {
    title: "John Smith",
    ref_no: "PRO800",
    start_date: "12-May-2025",
    status: "Pending",
  },
  {
    title: "John Smith",
    ref_no: "PRO800",
    start_date: "12-May-2025",
    status: "Pending",
  },
  {
    title: "John Smith",
    ref_no: "PRO800",
    start_date: "12-May-2025",
    status: "Pending",
  },
];



const DashboardTab = () => {
  return (
    <>
      <DasboardSliderComponent
        headingWhite="New"
        headingBlack="Direct Debits"
        cards={directDebitData}
      />
      <DasboardSliderComponent
        headingWhite="Successful"
        headingBlack="Payments"
        cards={directDebitData}
      />
      <DasboardSliderComponent
        headingWhite="Failed"
        headingBlack="Payments"
        cards={directDebitData}
      />
    </>
  );
};

export default DashboardTab;
