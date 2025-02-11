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
      <section
        className="my-0 pb-[120px] w-[100%]"
        style={{
          background: "linear-gradient(90deg, #aed2ff 30%, #ffffff)",
        }}
      >
        <Navbar />
        <div className="w-full bg-white">
          <div className="container flex flex-row justify-start items-center gap-5 py-6 px-5 md:px-0 cursor-pointer -z-10 mx-auto">
            <img src="/svgIcons/leftArrow.svg" />
            <p className="text-black/50 md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
              Go Back
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8  mt-5 text-center">
          <img
            src="/svgIcons/success.svg"
            className="md:w-[220px] md:h-[216px] w-[150px] h-[150px]"
            alt="error"
          />

          <h1 className="md:text-[48px]/[60px] text-[28px]/[34.44px] font-cashdisplay font-[500] text-center px-[20px] py-[10px]">
            Payment Successful
          </h1>

          <PaymentDetails card={PaymentCard} />

          <CustomButton>Generate Invoice</CustomButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
