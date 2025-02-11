import React from "react";
import Footer from "@/Components/Footer";
import PendingPSliderComponent from "@/Components/PendingPSlider";
import { MdClose } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import BackBtn from "@/Components/BackBtn";
import DarkNavbar from "@/Components/DarkNavbar";
import Navbar from "@/Components/Navbar";

const PendingPayCard = [
  {
    title: "DEWA Deposit",
    propertyId: "#1234",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
    btnText: "Pay",
    amount: 150,
    payment: true,
    active: false,
    alert: "Due Feb 2024",
    alertType: "success",
  },
  {
    title: "Maintenance Fee",
    propertyId: "#1234",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
    btnText: "Pay",
    amount: 150,
    payment: true,
    active: true,
    alert: "Due Jan 2024",
    alertType: "danger",
  },
  {
    title: "DEWA Deposit",
    propertyId: "#1234",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
    btnText: "Pay",
    amount: 150,
    payment: true,
    active: false,
    alert: "Due Feb 2024",
    alertType: "safe",
  },
  {
    title: "DEWA Deposit",
    propertyId: "#1234",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
    btnText: "Pay",
    amount: 150,
    payment: true,
    active: false,
    alert: "Due Feb 2024",
    alertType: "safe",
  },
];

const menuTags = ["Property ID #1234", "Maintenance Fee", "DEWA"];

function page() {
  return (
    <section className="flex flex-col gap-0">
      <Navbar />
      <div className="w-full bg-white">
        <div className="container flex flex-row justify-start items-center gap-5 py-6 px-5 md:px-0 cursor-pointer -z-10 mx-auto">
          <img src="/svgIcons/leftArrow.svg" />
          <p className="text-black/50 md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
            Go Back
          </p>
        </div>
      </div>

      <div
        className="w-full py-20"
        style={{
          background: "linear-gradient(90deg, #8ABEFF 30%, #FFFFFF 100%)",
        }}
      >
        <h1 className="text-center text-[28px]/[34.44px] md:text-[48px]/[59.04px] mt-16 mb-10 font-[500] font-cashdisplay">
          <span className="text-white">Pending</span> Payment (6)
        </h1>

        {/* =========== Payment Due =========== */}
        <div className="font-lexend flex flex-row gap-[8px] items-center justify-center bg-black mx-auto text-white  rounded-full md:mb-14 mb-5 px-3 py-2 md:w-[320px] w-[290px]">
          <img
            src="svgIcons/err.svg"
            alt="Err"
            className="md:w-[19px] md:h-[16px] w-[11px] h-[10px]"
          />
          <p className="md:text-[16px]/[20px] text-[12px]/[15px] font-[300] mr-2">
            Total of <span className="font-bold">AED 250</span> urgently due
          </p>
          <GrFormNext />
        </div>
        {/* =========== Payment Due End =========== */}

        {/* ============== Filter Section ================ */}
        <div
          className="py-2 sm:w-full md:w-fit px-5 mx-auto flex flex-row gap-5 items-center justify-start overflow-x-auto"
          style={{
            background: "linear-gradient(90deg, #FFFFFF29 16%, #FFFFFF66 40%)",
            // boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
          }}
        >
          <div className="md:pr-5 pr-3 border-r-4 border-[#9FC3EC] shrink-0">
            <img
              src="./svgIcons/menu.svg"
              alt="icon"
              className="md:w-[55px] w-[45px] md:h-[46px] h-[32px]"
            />
          </div>

          <div className="w-full flex flex-row md:gap-3 gap-2 justify-start items-center">
            {menuTags.map((elem, index) => {
              return (
                <div className="align-middle flex flex-row items-center gap-[14px] text-[10px] md:text-sm font-bold bg-[#D1BCFF] rounded-full px-[16px] py-[6px] whitespace-nowrap">
                  <div className="w-[18.5px] h-[18.5px] bg-[#A786F0] rounded-full"></div>
                  <div>
                    <p className="md:text-[20px]/[22.5px] font-lexend font-[600]">
                      {elem}
                    </p>
                    {/* <span className="md:tet-[18px]/[22.5px] font-lexend font-600">12345</span> */}
                  </div>
                  <img src="/svgIcons/close.svg" alt="" />
                </div>
              );
            })}
          </div>
        </div>
        {/* ============== Filter Section ================ */}

        <div className="w-full md:px-10 px-3">
          <PendingPSliderComponent
            cards={PendingPayCard}
            headingWhite="Pending"
            headingBlack="Payment (6)"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default page;
