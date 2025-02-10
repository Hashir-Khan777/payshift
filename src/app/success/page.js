import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import PaymentDetails from "@/Components/PaymentDetails";
import CustomButton from "@/Components/Button";

const PaymentCard = {
  amount: 150,
  refNo: "#12345",
  merchentName: "ABC Property developers",
};

export default function ErrorMessage() {
  return (
    <>
      <div className="w-full bg-[#ffffff] mt-20 py-9 flex flex-row justify-start items-center gap-5 px-4 md:ps-16 ps-6 cursor-pointer">
        <img src="/svgIcons/leftArrow.svg" />
        <p className="text-black/50 md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
          Go Back
        </p>
      </div>
      <Navbar />

      <section
        className="w-full pt-10 pb-20"
        style={{
          background: "linear-gradient(0deg, #aed2ff 30%, #ffffff)",
        }}
      >
        <div className="w-full flex flex-col justify-center items-center gap-8  mt-5 text-center">
          <img
            src="./svgIcons/success.svg"
            className="md:w-[220px] md:h-[216px] w-[150px] h-[150px]"
            alt="error"
          />

          <h1 className="md:text-[48px]/[60px] text-[28px]/[34.44px] font-cashdisplay font-[500] text-center px-[20px] py-[10px]">
            Payment Successful
          </h1>

          <PaymentDetails card={PaymentCard} />

          <CustomButton>Genrate Invoice</CustomButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
