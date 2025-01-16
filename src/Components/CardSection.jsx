import React from "react";
import {
  FaFileAlt,
  FaTools,
  FaHome,
  FaCalendarAlt,
  FaHeadphonesAlt,
  FaUserFriends,
} from "react-icons/fa";

const CardSection = () => {
  const cards = [
    { title: "Requests", icon: <FaFileAlt /> },
    { title: "Services", icon: <FaTools /> },
    { title: "Properties", icon: <FaHome /> },
    { title: "Appointments", icon: <FaCalendarAlt /> },
    { title: "Support", icon: <FaHeadphonesAlt /> },
    { title: "Refer", icon: <FaUserFriends /> },
  ];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(/Images/section2.png)` }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-3 gap-6 py-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg backdrop-blur-md rounded-lg flex flex-col items-center justify-center py-8 px-4 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4 text-gray-700">{card.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
