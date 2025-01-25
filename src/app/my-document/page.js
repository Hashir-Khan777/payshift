import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MyReportSliderComponent from "../../Components/MyReport";
import { FaArrowLeft } from "react-icons/fa6";

const tableHead = ["#", "Building Name", "Property Name", "Property Type", "Property Position", "No of Rooms", "Amount", "Total Area", "Current Status", "Action"]

const myRequest = [
    {
        no: 1,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 2,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 3,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 4,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 5,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 6,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 7,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 8,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 9,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 10,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 11,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 12,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 13,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 14,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 15,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },
    {
        no: 16,
        buildingName: "Name",
        propertyName: "Name",
        propertyType: "AP/TH/VI",
        propertyPosition: "Invoice No",
        rooms: "2 Bed/3 Bed",
        amount: "AED",
        totalArea: "1234",
        currentStatus: "Handover Completed",
        action: "View CWC SOA"
    },

]

export default function Home() {
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
                <MyReportSliderComponent cards={myRequest} headingWhite="My" headingBlack="Document" tablehead={tableHead} />
                <Footer />
            </section>

        </>
    );
}
