import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
// import HorizontalCard from "@/Components/HorizontalCard";
import Profile2 from "@/Components/Profile2";
// import BackBtn from '@/Components/backBtn';

const profileDetails = [
  {
    image:"https://s3-alpha-sig.figma.com/img/6349/acbd/1a0a65f8f11b31f35a3437c0ba96638b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUWIESKH1ZxEfAcTv6v7b7uzvxxtUjHVmjEAPtQn5qRJmAtte2u-Um0NV~SxUUE~~xZDoF7mI6im~SVtm5yBQsQ5hsrKCJlRDdROLO6H9soAqAJ2IIvkhWeny1JFYvOI8RL3ASkcRjf0i18KcRKDYchVBc~TMFw~r3-Vexrvv~BGANDxjGJpcxeIqAa3dZKkfwAaEktae-IUd~O30ikFZmZjBEzTDJLxL7M9MPYhx3iChMVJFHaCA4F9GRtuRDtUqgp0iy9stBTOtIW~oqSbVSTMzjzyW2U20E~P7yi0tmYdSuTkZqw99gC1JGJ2I7nnEeQR4QqDUovCi6VfWwA1Rw__",
    name:"Steve Rogers",
    phone:"+971 55 707 7482"
  }
]

function Page() {
  return (
    <section className="w-full min-h-[100vh]">

      {/* <div className="w-full bg-[#ffffff] py-5 flex flex-row justify-start items-center gap-3 px-4 md:ps-16 ps-6 cursor-pointer">
        <FaArrowLeft className="md:w-[20px] w-[15.28px] md:h-[20px] h-[15.22px]" />
        <p className="text-gray-500 md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
          Customer Profile
        </p>
      </div> */}

      {/* ===== Main Content container ====== */}

    <div className="w-full min-h-[100vh]"
     style={{
          background: "linear-gradient(45deg, #8ABEFF 20%, #ffffff)",
    }}>

    </div>

      {/* ===== Main Content container ====== */}

      {/* <HorizontalCard cards={profileDetails} /> */}


      
    </section>
  );
}

export default Page;
