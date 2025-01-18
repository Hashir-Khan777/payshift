"use client"
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import React from "react";
import SliderComponent from "./SliderComponent";
import Properties from "./Properties";
import { useState } from "react";
import './style.css';
import HomeTab from "./HomeTab";



const MenuSection = () => {

  //  for toggle between tabs 

  const cards = [
    { title: "Home", active: false },
    { title: "Services", active: false },
    { title: "My Properties", active: false },
    { title: "Make A Payment", active: false },
    { title: "Register Interest", active: false },
    { title: "Refer a Friend", active: false },
  ];

  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (title) => {
    setActiveTab(title);
  }

  return (
    <div
      className="py-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(125, 184, 255, 0.64) 0%, #FFF 100%);",
      }}
    >
      <div className="container mx-auto px-3">
        {/* MenuTabs Start */}
        <div
          className="flex items-center justify-center gap-4 md:gap-14 mb-4 overflow-hidden"
          style={{ marginTop: "4rem" }}
        >
          {cards.map((card, index) => (
            <>

              <div onClick={() => handleTabClick(card)}
                key={index}
                className={activeTab.title === card.title ? "active tab" : "tab" + `shrink-0 w-[250px] h-20 flex items-center justify-center shadow-lg ${card.active
                  ? "bg-gradient-to-b from-white to-[#96a7e8] border border-white"
                  : "bg-white/50"
                  } hover:scale-105 transition-transform duration-300`}
              >{activeTab.title === card.title && card.active == true}
                <span
                  className={`text-lg font-medium ${card.active ? "text-black" : "text-gray-500"
                    }`}
                >
                  {card.title}
                </span>
              </div>
              {/* MenuTabs End */}
            </>
          ))}
        </div>


        {/* Render Tabs ENd */}

        <div className="flex justify-end items-end gap-4 container">
          <button className="text-3xl " aria-label="Scroll Left">
            <FaRegArrowAltCircleLeft />
          </button>
          <button className="text-3xl" aria-label="Scroll Right">
            <FaRegArrowAltCircleRight />
          </button>
        </div>

        {/* Render Tab Content */}
        {activeTab === "Home" && (
          <HomeTab />
        )}

        {activeTab.title === "Services" && (
          <h1>Services</h1>
        )}

        {activeTab.title === "My Properties" && (
          <Properties />
        )}

        {activeTab.title === "Make A Payment" && (
          <section>
            <h2>Make A Payment</h2>
            <p>Payment instructions and forms go here...</p>
          </section>
        )}

        {activeTab.title === "Register Interest" && (
          <section>
            <h2>Register Your Interest</h2>
            <p>Details about registering interest go here...</p>
          </section>
        )}



        {/* Old code */}

        {/* <section>
              <SliderComponent
                headingWhite="Recent"
                headingBlack="Highlights"
                cards={recentHighlightsCards}
              />
              <SliderComponent
                headingWhite="Offers"
                headingBlack="& Promos"
                cards={offersCards}
              />
              <SliderComponent
                headingWhite="Upcoming"
                headingBlack="Payments"
                cards={paymentsCards}
              />
              <SliderComponent
                headingWhite="Upcoming"
                headingBlack="Appointments"
                cards={appointmentsCards}
              />
            </section> */}


      </div>
    </div>
  );
};

export default MenuSection;
