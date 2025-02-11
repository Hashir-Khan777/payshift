import HistoryTimeline from '@/Components/HistoryTimeline'
import HistoryTimeline02 from '@/Components/HistoryTimeline02'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import React from 'react'

const timelineData = [
    {
        yearRange: "2001 - 2005",
        title: "ESTABLISHMENT & EARLY YEARS",
        description: "Learn figure slide #1 next, connecteur adjusting drill. Learn foam slide #1 next, connecteur adjusting drill. Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/officeBuilding.svg",
        image: "/Images/AboutImage2.png"
    },
    {
        yearRange: "2006 - 2007",
        title: "MAKING PAYMENT SOLUTIONS",
        description: "Learn foam , connecteur adjusting drill. Learn foam slide #1 next, connecteur adjusting drill. Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/credit.svg",
        image: "/Images/AboutImage3.png"
    },
    {
        yearRange: "2008 - 2010",
        title: "ENHANCING GATEWAY FEATURES",
        description: "Learn foam , connecteur adjusting drill. Learn foam slide #1 next, connecteur adjusting drill.  Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/invoice-icon.svg",
        image: "/Images/Aboutmage4.png"
    },
    {
        yearRange: "2010 - 2015",
        title: "Enhancing DCC Features",
        description: "Learn foam , connecteur adjusting drill.  Learn foam slide #1 next, connecteur adjusting drill. Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/payment-device.svg",
        image: "/Images/AboutImage5.png"
    },
    {
        yearRange: "2015 - 2024",
        title: "AI Payment Solutions",
        description: "Learn foam , connecteur adjusting drill.Learn foam slide #1 next, connecteur adjusting drill. Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/receipt.svg",
        image: "/Images/AboutImage6.png"
    },
];

function Page() {
    return (
        <>
            <div className='h-auto mb-[73px]'>
                <Navbar />
            </div>

            {/* ------ Payshift Video Section ------ */}
            <div className="relative w-full flex justify-center items-center overflow-hidden border-0">
                <video
                    src="/Images/payshiftVideo.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full object-cover"
                ></video>
            </div>

            <section className="w-full h-full flex flex-col overflow-hidden"
                style={{
                    background: "linear-gradient(180deg,#C2DEFF, #FFFFFF)"
                }}>

                {/* ===== container 1 ===== */}
                {/* ------  Behind The Brand ------ */}
                <div className='w-full md:py-[100px] py-[64px] md:px-[80px] px-[24px] flex flex-col md:gap-[80px] gap-[40px]'>

                    <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
                        <span className="text-white">Behind</span> The Brand
                    </h1>

                    <div className='w-full mx-auto lg:h-[600px] border-[1px] border-white md::py-[100px] py-[36px] md:px-[64px] px-[20px] flex md:flex-row flex-col justify-center items-center md:gap-[60px] gap-[10px] rounded-md'
                        style={{
                            background: "linear-gradient(180deg,#92A8FF,#E8F3FF)",
                            boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.64)",
                        }}>

                        <div className='lg:w-[546px] md:w-[50%] w-full bg-red-600'>
                            <img src="/Images/Aboutimg1.png" className='w-full h-full object-cover ' />
                        </div>

                        <div className='lg:w-[546px] md:w-[50%] w-full flex flex-col md:gap-[64px] gap-[20px]'>
                            <p className='md:text-[24px]/[38.5px] text-[12px]/[19.4px] font-[400] font-lexend'>Lorem ipsum dolor sit amet consecetur. Risus sit sapien mauris egestas amet. Sed sed esget elementum dictumst mi massa Iris suspendisse.</p>

                            <ul className='flex flex-col gap-[12px]'>

                                <li className='flex flex-row justify-start items-center gap-[12px]'><img src="/svgIcons/checkmark.svg" className='md:w-[20px] w-[16px] md:h-[20px] h-[16px]' /><span className='md:text-[24px]/[30px] text-[14px]/[17.5px] tracking-[4%] font-lexend'>Provide seamless, scalable solutions</span></li>
                                <li className='flex flex-row justify-start items-center gap-[12px]'><img src="/svgIcons/checkmark.svg" className='md:w-[20px] w-[16px] md:h-[20px] h-[16px]' /><span className='md:text-[24px]/[30px] text-[14px]/[17.5px] tracking-[4%] font-lexend'>Ensure safe transactions for everyone.</span></li>
                                <li className='flex flex-row justify-start items-center gap-[12px]'><img src="/svgIcons/checkmark.svg" className='md:w-[20px] w-[16px] md:h-[20px] h-[16px]' /><span className='md:text-[24px]/[30px] text-[14px]/[17.5px] tracking-[4%] font-lexend'>Help businesses of all sizes.</span></li>
                                <li className='flex flex-row justify-start items-center gap-[12px]'><img src="/svgIcons/checkmark.svg" className='md:w-[20px] w-[16px] md:h-[20px] h-[16px]' /><span className='md:text-[24px]/[30px] text-[14px]/[17.5px] tracking-[4%] font-lexend'>Streamline payments for efficiency.</span></li>
                                <li className='flex flex-row justify-start items-center gap-[12px]'><img src="/svgIcons/checkmark.svg" className='md:w-[20px] w-[16px] md:h-[20px] h-[16px]' /><span className='md:text-[24px]/[30px] text-[14px]/[17.5px] tracking-[4%] font-lexend'>Pioneer next-gen payment technologies.</span></li>

                            </ul>

                        </div>
                    </div>
                    {/* ===== container 1 ===== */}

                    {/* ===== container 2 ===== */}
                    <div className='w-full grid grid-cols-2 gap-[24px]'>

                        <div className=' md:h-[268px] h-[185px] flex flex-col justify-center items-center rounded-sm md:gap-[40px] gap-[10px] border-[1.53px] border-white py-[10px] px-[20px]'
                            style={{
                                boxShadow: "2px 2px 10px 0px rgba(0, 69, 197, 0.5)",
                            }}>
                            <p className='font-cashdisplay md:text-[48px]/[59.04px] text-[28px]/[34.44px] font-[500]'>+999</p>
                            <p className='font-cashdisplay md:text-[28px]/[34.44px] text-[18px]/[22.14px] font-[500] text-center'>Total users worldwide</p>
                        </div>

                        <div className=' md:h-[268px] h-[185px] flex flex-col justify-center items-center rounded-sm md:gap-[40px] gap-[10px] border-[1.53px] border-white py-[10px] px-[20px]'
                            style={{
                                background: "linear-gradient(180deg,#92A8FF,#E8F3FF)",
                                boxShadow: "2px 2px 10px 0px rgba(0, 69, 197, 0.5)",
                            }}>
                            <p className='font-cashdisplay md:text-[48px]/[59.04px] text-[28px]/[34.44px] font-[500]'>+999</p>
                            <p className='font-cashdisplay md:text-[28px]/[34.44px] text-[18px]/[22.14px] font-[500] text-center'>Total users worldwide</p>
                        </div>

                        <div className='basis-[50%] md:h-[268px] h-[185px] flex flex-col justify-center items-center rounded-sm md:gap-[40px] gap-[10px] border-[1.53px] border-white py-[10px] px-[20px]'
                            style={{
                                background: "linear-gradient(180deg,#92A8FF,#E8F3FF)",
                                boxShadow: "2px 2px 10px 0px rgba(0, 69, 197, 0.5)",
                            }}>
                            <p className='font-cashdisplay md:text-[48px]/[59.04px] text-[28px]/[34.44px] font-[500]'>15%</p>
                            <p className='font-cashdisplay md:text-[28px]/[34.44px] text-[18px]/[22.14px] font-[500] text-center'>Growth rate YoY</p>
                        </div>

                        <div className='basis-[50%] md:h-[268px] h-[185px] flex flex-col justify-center items-center rounded-sm md:gap-[40px] gap-[10px] border-[1.53px] border-white py-[10px] px-[20px]'
                            style={{
                                boxShadow: "2px 2px 10px 0px rgba(0, 69, 197, 0.5)",
                            }}>
                            <p className='font-cashdisplay md:text-[48px]/[59.04px] text-[28px]/[34.44px] font-[500]'>160</p>
                            <p className='font-cashdisplay md:text-[28px]/[34.44px] text-[18px]/[22.14px] font-[500] text-center'>Payment Feature</p>
                        </div>



                    </div>
                    {/* ===== container 2 ===== */}

                </div>
            </section>

            <div className='hidden sm2:block'>
            <HistoryTimeline02 cards={timelineData} headingWhite="Our" headingBlack="History" />
            </div>
            <div className='block sm2:hidden'>
            <HistoryTimeline headingWhite="Our" headingBlack="History" />
            </div>
            <Footer />
        </>
    );
}

export default Page;
