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


const url = "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"

const profileDetails = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/6349/acbd/1a0a65f8f11b31f35a3437c0ba96638b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUWIESKH1ZxEfAcTv6v7b7uzvxxtUjHVmjEAPtQn5qRJmAtte2u-Um0NV~SxUUE~~xZDoF7mI6im~SVtm5yBQsQ5hsrKCJlRDdROLO6H9soAqAJ2IIvkhWeny1JFYvOI8RL3ASkcRjf0i18KcRKDYchVBc~TMFw~r3-Vexrvv~BGANDxjGJpcxeIqAa3dZKkfwAaEktae-IUd~O30ikFZmZjBEzTDJLxL7M9MPYhx3iChMVJFHaCA4F9GRtuRDtUqgp0iy9stBTOtIW~oqSbVSTMzjzyW2U20E~P7yi0tmYdSuTkZqw99gC1JGJ2I7nnEeQR4QqDUovCi6VfWwA1Rw__",
    name: "Steve Rogers",
    phone: "+971 55 707 7482",
  }
]

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
    btnText: "Button text"
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
    btnText: "Button text"
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
    btnText: "Button text"
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
    btnText: "Button text"
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
    btnText: "Button text"
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
    btnText: "Button text"
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
    btnText: "Button text"
  },
]

const settingAndPreferences = [
  {
    name: "Languages",
    info: "Chosen Language: English"
  },
  {
    name: "Bill Notifications",
    info: "Receive alerts when bill is generated"
  },
  {
    name: "Permissions",
    info: "Manage data sharing settings"
  },
  {
    name: "Reminders",
    info: "Never miss an update"
  },

]

const security = [
  {
    name: "Screen Lock",
    info: "Biometrics & Screen Locks"
  },
  {
    name: "Bill Notifications",
    info: "Check all blocked contacts"
  },
  {
    name: "About Payshift",
    info: "Privacy Policy, Terms & Conditions"
  },
]

const paymentMethod = [
  {
    title:"Card",
    icon:"/svgIcons/card.svg",
  }
]


function Page() {
  return (
    <section className="w-full">
      <BackBtn backBtnText="Customer Profile" />

      {/* ===== Main Content container ====== */}

      <div
        className="w-full h-auto md:py-[100px] py-[50px] flex flex-col md:gap-[80px] gap-[24px]"
        style={{
          background: "linear-gradient(45deg, #8ABEFF 20%, #ffffff)",
        }}
      >
        <Profile1Card1 cards={profileDetails} />

        {/* ----------- My Items ------------ */}

        <div className="sm2:block hidden">
          <ProfileMyItems headingBlack="My Items" cards={MyItemsCardsContent} />
        </div>

        <div className="block sm2:hidden">
          <Slider1 headingBlack="My Items" cards={MyItemsCardsContent} />
        </div>

        {/* --------- My Items ------- */}

        <Card2 headingBlack="Payment Methods" />

        <Card3 headingBlack="Payment Management" />

        {/* ----Settings & Preferences ----*/}
        <Card1 cards={settingAndPreferences} headingBlack="Settings & Preferences" />

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
