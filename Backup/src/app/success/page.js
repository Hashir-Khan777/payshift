import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import PaymentDetails from "@/Components/PaymentDetails";

const PaymentCard = {
    amount:150,
    refNo:"#12345",
    merchentName:"ABC Property developers"
}


export default function ErrorMessage() {
    return (
        <>
            <div className="w-full bg-[#ffffff] mt-20 py-5 flex flex-row justify-start items-center gap-3 px-4 md:ps-16 ps-6 cursor-pointer">

                <FaArrowLeft className="md:w-[20px] w-[15.28px] md:h-[20px] h-[15.22px]" />
                <p className="text-black md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
                    Go Back
                </p>
            </div>
            <Navbar />

            <section className="w-full pt-10 pb-20" style={{
                background: "linear-gradient(0deg, #aed2ff 30%, #ffffff)",
            }} >

                <div className="w-full flex flex-col justify-center items-center gap-8  mt-5 text-center">

                    <img src="./svgIcons/success.svg" className="md:w-[220px] md:h-[216px] w-[150px] h-[150px]" alt="error" />

                    <h1 className="md:text-[48px]/[60px] text-[28px]/[34.44px] font-cashdisplay font-[500] text-center px-[20px] py-[10px]">Payment Successful</h1>

                   <PaymentDetails card={PaymentCard} />

                    <button className="animated-button flex items-center justify-center gap-7 px-5 py-2 bg-black text-white font-normal rounded-full hover:bg-gray-800 h-[37px] ">
                        <span className="relative  text-base left-0 md:text-[20px]/[25px] animated-text transition-all ease-linear duration-[400ms] font-lexend">
                            Genrate Invoice
                        </span>
                        <img
                            src="/svgIcons/slidercomponenticon.svg"
                            className="relative right-0 transition-all ease-linear duration-[400ms] animated-icon w-[22px] h-[18px] md:w-[32px] md:h-[25px]"
                        />
                    </button>

</div>
            </section>
            <Footer />

        </>
    );
}

