import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MyRequestSliderComponent from "./MyRequest";

const tableHead = ["#","Building Name","Property Name","Property Type", "Property Position","No of Rooms","Amount","Total Area","Current Status","Action"]

const myRequest = [
    {
        no : 1,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 2,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 3,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 4,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 5,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 6,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 7,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 8,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 9,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 10,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 11,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 12,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 13,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 14,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 15,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
    {
        no : 16,
        buildingName:"Name",
        propertyName:"Name",
        propertyType:"AP/TH/VI",
        propertyPosition:"Invoice No",
        rooms:"2 Bed/3 Bed",
        amount:"AED",
        totalArea:"1234",
        currentStatus:"Handover Completed",
        action:"View CWC SOA"
    },
   
]

export default function Home() {
    return (
        <>

            <section className="my-0  min-h-[100vh] w-[100%]" style={{
                background: "linear-gradient(90deg, #aed2ff 30%, #ffffff)",
            }} >
                <Navbar />
                <MyRequestSliderComponent cards={myRequest} headingWhite="My" headingBlack="Requests" tablehead={tableHead} />
                <Footer />
            </section>

        </>
    );
}
