import Card4 from '@/Components/Card4'
import React from 'react'

const OurProductCards = [
    {
        spantext: "Advanced Fraud Prevention",
        descrption: "measures to protect your business."
    },
    {
        spantext: "PCI DSS Compliant",
        descrption: "to ensure handling and storing credit and debit card information safely and securely"
    },
    {
        spantext: "24/7 Security Monitoring and Threat Detection",
        descrption: "assures constant vigilance."
    },
    {
        spantext: "Multi-Layered Security Approach",
        descrption: "to Safeguard your payments"
    },
];

function SecurityMeasures({ headingWhite, headingBlack }) {
    return (
        <section className="relative w-full min-h-screen bg-blue-600 py-12 px-6 md:px-12 bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{
                backgroundImage: "url('/Images/securityMeasureBg.png')"
            }}>
            <div className="z-10 w-full flex flex-col justify-center items-center gap-[40px]">
                <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
                    {headingBlack[0]}
                    <span className="text-white px-2">{headingWhite}</span>
                    {headingBlack[1]}
                </h1>

                <div className="w-full flex lg:flex-row flex-col flex-wrap lg:flex-nowrap justify-center items-center gap-[40px]">
                    {/* Left Image for Desktop */}
                    <div className="hidden lg:block flex-1 max-w-[600px] object-cover object-center">
                        <img src="/lphomeimg2.svg" alt="Security" className=" w-full h-full " />
                    </div>

                    {/* Left Image for Mobile */}
                    <div className="lg:hidden w-full h-full flex justify-center items-center border-[4px] rounded-[3px] border-white bg-cover bg-center bg-no-repeat overflow-hidden"
                        style={{
                            backgroundImage: "url('/Images/industrySolBg.svg')",
                            boxShadow: "1px 2px 20px 5px #8b96dd"
                        }}
                    >
                        <img src="/Images/lphomeimg3.svg"
                            alt="Security"
                            className="min-w-[325px] sm:w-full h-[272px] sm:h-full object-cover" />
                    </div>



                    {/* Text Section */}
                    <div className='flex-1 w-full '>
                        {
                            OurProductCards.map((card, index) => {
                                return (
                                    <div key={index} className="w-full flex flex-col md:px-6 md:mb-10 mb-5">

                                        <div className="flex flex-row gap-4 items-center">
                                            <img src="/svgIcons/grCheckmark.svg" alt="Checkmark" className="w-6 md:w-8 h-6 md:h-8" />
                                            <p className="tracking-wide font-lexend font-bold text-base md:text-xl">
                                                {card.spantext}
                                                <span className="font-normal ps-1">{card.descrption}</span>
                                            </p>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>



                </div>
            </div>
        </section>
    );
}

export default SecurityMeasures;

