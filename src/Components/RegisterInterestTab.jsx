import React from "react";
import RISliderComponent from "./RISliderComponent";

// const allCategories = ["All", "Family Home","Apartments","Villas", "TownHousses"]

const allCategories = [
  { id: 1, cat: "All", active: true },
  { id: 2, cat: "Family Home", active: false },
  { id: 3, cat: "Apartments", active: false },
  { id: 4, cat: "Villas", active: false },
  { id: 5, cat: "TownHousses", active: false },
];

const propertyCards = [
  {
    name: "Property 01",
    image: "/Images/Rectangle13.png",
    rating: 4.5,
    price: "AED 900k",
    loc: "Dubai",
    category: "Family Home",
  },
  {
    name: "Property 02",
    image: "/Images/Rectangle13.png",
    rating: 4.5,
    price: "AED 900k",
    loc: "Dubai",
    category: "",
  },
  {
    name: "Property 03",
    image: "/Images/Rectangle13.png",
    rating: 4.5,
    price: "AED 900k",
    loc: "Dubai",
    category: "Apartments",
  },
  {
    name: "Property 04",
    image: "/Images/Rectangle13.png",
    rating: 4.5,
    price: "AED 900k",
    loc: "Dubai",
    category: "Villas",
  },
  {
    name: "Property 05",
    image: "/Images/Rectangle13.png",
    rating: 4.5,
    price: "AED 900k",
    loc: "Dubai",
    category: "TownHousses",
  },
  {
    name: "Property 06",
    image: "/Images/Rectangle13.png",
    rating: 4.5,
    price: "AED 900k",
    loc: "Dubai",
    category: "Family Home",
  },
];

const RegisterInterestTab = () => {
  return (
    <>
      <RISliderComponent
        link="Load More"
        headingWhite="Discover Your"
        headingBlack="Dream Property"
        cards={propertyCards}
        categories={allCategories}
      />
    </>
  );
};

export default RegisterInterestTab;
