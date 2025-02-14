import React from "react";
import ReferSliderComponent from "./ReferSC";
import ReferHistorySliderComponent from "./ReferHistorySC";

const referAndEarnCard = [
  {
    title: "Special Promo",
    heading: "Get AED 150 off",
    discount_amount: 150,
    discount_code: "REF50",
    btnText: "Invite",
  },
  {
    title: "Special Promo",
    heading: "Get AED 150 off",
    discount_amount: 150,
    discount_code: "REF50",
    btnText: "Invite",
  },
  {
    title: "Special Promo",
    heading: "Get AED 150 off",
    discount_amount: 150,
    discount_code: "REF50",
    btnText: "Invite",
  },
  {
    title: "Special Promo",
    heading: "Get AED 150 off",
    discount_amount: 150,
    discount_code: "REF50",
    btnText: "Invite",
  },
  {
    title: "Special Promo",
    heading: "Get AED 150 off",
    discount_amount: 150,
    discount_code: "REF50",
    btnText: "Invite",
  },
  {
    title: "Special Promo",
    heading: "Get AED 150 off",
    discount_amount: 150,
    discount_code: "REF50",
    btnText: "Invite",
  },
];

const referHistoryCard = [
  {
    name: "John Smith",
    date: "12/12/24",
    picture: "/Images/profile.png",
    amount: 100,
  },
  {
    name: "Mary Jane",
    date: "12/12/24",
    picture: "/Images/profile.png",
    amount: 150,
  },
  {
    name: "Xiao Long Bao",
    date: "12/12/24",
    picture: "/Images/profile.png",
    amount: 120,
  },
  {
    name: "John Smith",
    date: "12/12/24",
    picture: "/Images/profile.png",
    amount: 150,
  },
  {
    name: "John Smith",
    date: "12/12/24",
    picture: "/Images/profile.png",
    amount: 150,
  },
  {
    name: "John Smith",
    date: "12/12/24",
    picture: "/Images/profile.png",
    amount: 150,
  },
];

const ReferFriendTab = () => {
  return (
    <>
      <ReferSliderComponent
        headingWhite="Refer"
        headingBlack="And Earn"
        cards={referAndEarnCard}
      />

      <ReferHistorySliderComponent
        headingWhite="Referrel"
        headingBlack="History"
        cards={referHistoryCard}
      />
    </>
  );
};

export default ReferFriendTab;
