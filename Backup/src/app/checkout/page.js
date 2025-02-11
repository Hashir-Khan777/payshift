import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import CheckOutComponent from "./Checkout";
import { FaArrowLeft } from "react-icons/fa6";

const checkoutDetails = {
        amount: 150,
        refNo: "#12345",
        merchentName: "ABC Property Developers",
    };


export default function Home() {

    const headingWHite = ["Payment"]
    const headingBlack = ["Summary", "Method"]

    return (
        <>
            <div className="w-full bg-[#ffffff] mt-20 py-5 flex flex-row justify-start items-center gap-3 px-4 md:ps-16 ps-6 cursor-pointer">
                <FaArrowLeft className="md:w-[20px] w-[15.28px] md:h-[20px] h-[15.22px]" />
                <p className="text-black md:text-[20px]/[25px] text-[14px]/[17.5px] tracking-[4%] font-lexend font-[500]">
                    Go Back
                </p>
            </div>

            <section className="my-0  w-[100%]" style={{
                background: "linear-gradient(90deg, #aed2ff 30%, #ffffff)",
            }} >
                <Navbar />
                <CheckOutComponent cards={checkoutDetails} headingWhite={headingWHite} headingBlack={headingBlack} />
                <Footer />
            </section>

        </>
    );
}
