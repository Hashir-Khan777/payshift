import React from "react";
import Profile1Card1 from "@/Components/profile1card1";
import BackBtn from "@/Components/BackBtn";
import ProfileMyItems from "@/Components/ProfileMyItems";
import Slider1 from "@/Components/Slider1";
import MyItem from "./MyItem";
import Card1 from "@/Components/Card1";
import LogOut from "@/Components/LogOut";
import Card2 from "@/Components/Card2";
import Card3 from "@/Components/Card3";
import Footer from "@/Components/Footer";

const url =
  "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg";

const profileDetails = [
  {
    image: "/Images/profile2.png",
    name: "Steve Rogers",
    phone: "+971 55 707 7482",
  },
];

const MyItemsCardsContent = [
  {
    category: "Category text",
    tag: "Tag text",
    projectName: "Project name",
    location: "Location",
    size: "Size info",
    details: "Details info",
    viewAllLink: "your-link-here",
    link: "your-link-here",
    btnText: "Button text",
  },
  {
    category: "Category text",
    tag: "Tag text",
    projectName: "Project name",
    location: "Location",
    size: "Size info",
    details: "Details info",
    viewAllLink: "your-link-here",
    link: "your-link-here",
    btnText: "Button text",
  },
  {
    category: "Category text",
    tag: "Tag text",
    projectName: "Project name",
    location: "Location",
    size: "Size info",
    details: "Details info",
    viewAllLink: "your-link-here",
    link: "your-link-here",
    btnText: "Button text",
  },
  {
    category: "Category text",
    tag: "Tag text",
    projectName: "Project name",
    location: "Location",
    size: "Size info",
    details: "Details info",
    viewAllLink: "your-link-here",
    link: "your-link-here",
    btnText: "Button text",
  },

  {
    category: "Category text",
    tag: "Tag text",
    projectName: "Project name",
    location: "Location",
    size: "Size info",
    details: "Details info",
    viewAllLink: "your-link-here",
    link: "your-link-here",
    btnText: "Button text",
  },
  {
    category: "Category text",
    tag: "Tag text",
    projectName: "Project name",
    location: "Location",
    size: "Size info",
    details: "Details info",
    viewAllLink: "your-link-here",
    link: "your-link-here",
    btnText: "Button text",
  },
  {
    category: "Category text",
    tag: "Tag text",
    projectName: "Project name",
    location: "Location",
    size: "Size info",
    details: "Details info",
    viewAllLink: "your-link-here",
    link: "your-link-here",
    btnText: "Button text",
  },
];

const settingAndPreferences = [
  {
    name: "Languages",
    info: "Chosen Language: English",
  },
  {
    name: "Bill Notifications",
    info: "Receive alerts when bill is generated",
  },
  {
    name: "Permissions",
    info: "Manage data sharing settings",
  },
  {
    name: "Reminders",
    info: "Never miss an update",
  },
];

const security = [
  {
    name: "Screen Lock",
    info: "Biometrics & Screen Locks",
  },
  {
    name: "Bill Notifications",
    info: "Check all blocked contacts",
  },
  {
    name: "About Payshift",
    info: "Privacy Policy, Terms & Conditions",
  },
];

const paymentMethod = [
  {
    title: "Card",
    icon: "/svgIcons/card.svg",
  },
];

function Page() {
  return (
    <section className="w-full">
      <BackBtn backBtnText="Customer Profile" />

      {/* ===== Main Content container ====== */}

      <div
        className="w-full h-auto md:py-[100px] md:px-[80px] py-[50px] px-[20px] pb-[80px] flex flex-col  md:gap-[80px] gap-[10px]"
        style={{
          background: "linear-gradient(90deg, #8ABEFF 20%, #ffffff)",
        }}
      >
        <Profile1Card1 cards={profileDetails} />

        {/* ----------- My Items ------------ */}

        <div className="sm2:block hidden w-full">
          <ProfileMyItems headingBlack="My Items" cards={MyItemsCardsContent} />
        </div>

        <div className="block sm2:hidden">
          <Slider1 headingBlack="My Items" cards={MyItemsCardsContent} />
        </div>

        {/* --------- My Items ------- */}

        <Card2 headingBlack="Payment Methods" />

        <Card3 headingBlack="Payment Management" />

        {/* ----Settings & Preferences ----*/}
        <Card1
          cards={settingAndPreferences}
          headingBlack="Settings & Preferences"
        />

        {/* ----Settings & Preferences ----*/}
        <Card1 cards={security} headingBlack="Security" />

        {/* ---- LogOut ----- */}
        <LogOut text="LOGOUT" />
      </div>

      {/* ===== Main Content container ====== */}

      <Footer />
    </section>
  );
}

export default Page;
