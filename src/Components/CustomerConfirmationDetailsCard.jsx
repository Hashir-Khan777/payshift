import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function CustomerConfirmationDetailsCard() {
  const [activeTab, setActiveTab] = useState("customer");
  const [showTabs, setShowTabs] = useState(false);

  const renderTabContent = () => {
    const tabContent = {
      customer: [
        { label: "Emirates ID", value: "784-1234-1134567-1" },
        { label: "Name", value: "Hamad Salem Naser" },
        { label: "Email", value: "hamadnaser@gmail.com" },
        { label: "Mobile", value: "55 327 9516" },
        { label: "Customer Type", value: "Individual" },
        { label: "Customer Reference No.", value: "#473267" },
      ],
      bank: [
        { label: "Account Number", value: "AE230260001012345678901" },
        { label: "Bank Name", value: "Emirates NBD" },
        { label: "IBAN", value: "AE26 0260 0010 1234 5678 901" },
        { label: "Branch", value: "Dubai Mall Branch" },
      ],
      payment: [
        { label: "Card Type", value: "Visa" },
        { label: "Card Number", value: "**** **** **** 1234" },
        { label: "Expiry Date", value: "12/27" },
        { label: "Billing Address", value: "123 Sheikh Zayed Road, Dubai" },
      ],
      autopay: [
        { label: "Autopay Status", value: "Enabled" },
        { label: "Autopay Date", value: "5th of every month" },
        { label: "Preferred Method", value: "Credit Card" },
        { label: "Limit", value: "AED 5000" },
      ],
    };

    return tabContent[activeTab]?.map((item, index) => (
      <div key={index}>
        <div className="mb-2 font-semibold">{item.label}</div>
        <div>{item.value}</div>
      </div>
    ));
  };

  return (
    <div className="bg-[#f4f9ff] shadow p-6 max-w-4xl mx-auto">
      {/* Toggle Icon for Mobile */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Details</div>
        <button
          className="text-2xl"
          onClick={() => setShowTabs(!showTabs)}
          aria-label="Toggle Tabs"
        >
          <HiMenu />
        </button>
      </div>

      {/* Tabs - Responsive */}
      <div
        className={`flex flex-col md:flex-row border-b border-gray-200 ${showTabs ? "block" : "hidden md:flex"
          }`}
      >
        {["customer", "bank", "payment", "autopay"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowTabs(false); // auto close on mobile
            }}
            className={`px-6 py-3 text-sm font-semibold border-t md:border-t-0 ${activeTab === tab
              ? "text-white bg-[#0B1F4B]"
              : "text-gray-600"
              } ${tab !== "customer" ? "md:border-l border-gray-200" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Details
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800">
        {renderTabContent()}
      </div>
    </div>
  );
}
