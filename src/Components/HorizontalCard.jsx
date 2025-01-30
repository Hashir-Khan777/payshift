import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function HorizontalCard(cards) {
  return (

    <div className="w-[90%] flex flex-row justify-between items-center">
    <div>
      {cards.image ? (
        <div className="md:w-[92.6px] md:h-[92.6px] bg-red-500">
          <img
            className="object-cover object-center rounded-full md:w-[92.6px] md:h-[92.6px]"
            src={cards.image}
            alt="Profile Image"
          />
        </div>
      ) : null}

      <p>
        <span>{cards.name}</span>
      </p>

      </div>

      <FaArrowRight className="md:w-[27px] md:h-[26px]" />
    </div>
  );
}

export default HorizontalCard;
