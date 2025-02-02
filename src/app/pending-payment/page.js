import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import PendingPSliderComponent from '@/Components/PendingPSlider'
import { MdClose } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";

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

]

const menuTags = ["Property ID #1234", "Maintenance Fee", "DEWA"]

function page() {
    return (
        <section className='flex flex-col gap-0'>
            <Navbar />

            <div
                className="w-full py-20 px-5 md:px-16"
                style={{
                    background: "linear-gradient(90deg, #8ABEFF 30%, #FFFFFF 100%)",
                    boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
                }}
            >
                <h1 className="text-center text-2xl md:text-4xl mt-16 mb-10 font-medium font-cashdisplay">
                    <span className="text-white">Pending</span> Payment (6)
                </h1>

                {/* =========== Payment Due =========== */}
                <div className="font-lexend flex flex-row gap-3 items-center justify-center bg-black mx-auto text-white  rounded-full md:mb-14 mb-5 px-3 py-2 md:w-[320px] w-[290px]">
                    <img src="svgIcons/err.svg" alt="Err" className='md:w-[19px] md:h-[16px] w-[11px] h-[10px]' />
                    <p className='md:text-[16px]/[20px] text-[12px]/[15px] font-[300]'>
                        Total of <span className="font-bold">AED 250</span> urgently due
                    </p>
                    <GrFormNext />
                </div>
                {/* =========== Payment Due End =========== */}


                {/* ================================== */}
                <div className='py-2 md:w-[70%] w-[100vw] px-5 mx-auto flex flex-row gap-5 items-center justify-start overflow-x-auto '
                    style={{
                        background: "linear-gradient(90deg, #FFFFFF29 16%, #FFFFFF66 40%)",
                        // boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
                    }}
                >
                    <div className='md:pr-5 pr-3 border-r-4 border-[#9FC3EC] shrink-0'>
                        <img src="./svgIcons/menu.svg" alt="icon" className='md:w-[55px] w-[45px] md:h-[46px] h-[32px]' />
                    </div>

                    <div className='w-full flex flex-row md:gap-3 gap-2 justify-start items-center'>

                        {
                            menuTags.map((elem, index) => {

                                return (
                                    <div className="align-middle flex flex-row items-center gap-2 text-[10px] md:text-sm font-bold bg-[#D1BCFF] rounded-full px-5 py-2 whitespace-nowrap">
                                        <div className="w-[12px] h-[12px] bg-[#A786F0] rounded-full"></div>
                                        <div>
                                            <span className='md:tet-[18px]/[22.5px] font-lexend font-[600]'>{elem}</span>
                                            {/* <span className="md:tet-[18px]/[22.5px] font-lexend font-600">12345</span> */}
                                        </div>
                                        <MdClose />
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
                {/* ================================== */}

                <PendingPSliderComponent cards={PendingPayCard} headingWhite="Pending" headingBlack="Payment (6)" />

            </div>
            <Footer />

        </section>

    )
}

export default page
