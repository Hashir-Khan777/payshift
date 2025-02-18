// import Card4 from '@/Components/Card4'
// import React from 'react'

// const OurProductCards = [
//     {
//         image: "/Images/lpHomeimg1.png",
//         title: "Payment Gateway",
//         info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
//     },
//     {
//         image: "/Images/lpHomeimg1.png",
//         title: "Payment Gateway",
//         info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
//     },
//     {
//         image: "/Images/lpHomeimg1.png",
//         title: "Payment Gateway",
//         info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
//     },
//     {
//         image: "/Images/lpHomeimg1.png",
//         title: "Payment Gateway",
//         info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
//     },
// ]


// function SecurityMeasures({ headingWhite, headingBlack }) {
//     return (
//         <section className="relative w-full min-h-full bg-blue-600 py-[100px] px-[80px] bg-cover bg-center flex justify-center items-center"
//             style={{
//                 // background: "url('/Lpbg1.png') no-repeat",
//             }}>
//             {/* Background Image */}
//             <div
//                 className="z-10 w-full flex flex-col justify-center items-center gap-[50px]"
//             >
//                 <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
//                     {headingBlack[0]}<span className="text-white px-2">{headingWhite}</span>{headingBlack[1]}
//                 </h1>

//                 <div className='w-full flex md:flex-row flex-col justify-center items-center gap-[20px] md:p-[80px] p-[5px]'>
//                     <div className='shrink-0 hidden md:block md:w-1/2 w-[325px] '>
//                         <img src="/lphomeimg2.svg" alt="" />
//                         {/* <img src="/Images/lphomeiimg3.svg" alt="" /> */}
//                     </div>
//                     <div className='shrink-0 block md:hidden w-[325px] '>
//                         {/* <img src="/lphomeimg2.svg" alt="" /> */}
//                         <img src="/Images/lphomeiimg3.svg" alt="" />
//                     </div>

//                     <div className='md:w-1/2 w-full flex flex-col md:gap-[40px] gap-[20px] md:px-[24px] px-2'>
//                         <div className='w-full flex flex-row md:gap-[32px] gap-2 md:justify-center justify-start items-center'>
//                             <img src="/svgIcons/grCheckmark.svg" alt="" className='md:w-[32px] md:h-[32px] w-[24px] h-[24px]]' />
//                             <p className='tracking-[4%] font-lexend font-[700] md:text-[25px]/[31.25px] text-[14px]/[17.5px]'>
//                                 Advanced Fraud
//                                 Prevention
//                                 <span className='font-[400]'> measures to protect
//                                     your business: highlights proactive protection.</span>
//                             </p>
//                         </div>
//                         <div className='flex flex-row gap-[32px] justify-center items-center '>
//                             <img src="/svgIcons/grCheckmark.svg" alt=""  className='w-[32px] h-[32px]' />
//                             <p className='tracking-[4%] font-lexend font-[700] text-[25px]/[31.25px]'>
//                                 Advanced Fraud
//                                 Prevention
//                                 <span className='font-[400]'> measures to protect
//                                     your business: highlights proactive protection.</span>
//                             </p>
//                         </div>
//                         <div className='flex flex-row gap-[32px] justify-center items-center  '>
//                             <img src="/svgIcons/grCheckmark.svg" alt=""  className='w-[32px] h-[32px]' />
//                             <p className='tracking-[4%] font-lexend font-[700] text-[25px]/[31.25px]'>
//                                 Advanced Fraud
//                                 Prevention
//                                 <span className='font-[400]'> measures to protect
//                                     your business: highlights proactive protection.</span>
//                             </p>
//                         </div>
//                         <div className='flex flex-row gap-[32px] justify-center items-center '>
//                             <img src="/svgIcons/grCheckmark.svg" alt=""  className='w-[32px] h-[32px]' />
//                             <p className='tracking-[4%] font-lexend font-[700] text-[25px]/[31.25px]'>
//                                 Advanced Fraud
//                                 Prevention
//                                 <span className='font-[400]'> measures to protect
//                                     your business: highlights proactive protection.</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default SecurityMeasures


import Card4 from '@/Components/Card4'
import React from 'react'

const OurProductCards = [
    {
        spantext: "Advanced Fraud Prevention",
        descrption: "measures to protect your business: highlights proactive protection."
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
        descrption: "to sSafeguard your payments: suggests a robust and comprehensive system."
    },
];

function SecurityMeasures({ headingWhite, headingBlack }) {
    return (
        <section className="relative w-full min-h-screen bg-blue-600 py-12 px-6 md:px-12 bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{
                backgroundImage: "url('/Images/securityMeasureBg.png')"
            }}>
            <div className="z-10 w-full flex flex-col justify-center items-center md:gap-8 gap-[10px]">
                <h1 className="text-center text-xl md:text-4xl font-medium font-cashdisplay">
                    {headingBlack[0]}
                    <span className="text-white px-2">{headingWhite}</span>
                    {headingBlack[1]}
                </h1>

                <div className="w-full flex lg:flex-row flex-col flex-wrap lg:flex-nowrap justify-center items-center gap-6 md:gap-10">
                    {/* Left Image for Desktop */}
                    <div className="hidden lg:block flex-1 max-w-[600px] object-cover object-center">
                        <img src="/lphomeimg2.svg" alt="Security" className=" w-full h-full " />
                    </div>

                    {/* Left Image for Mobile */}
                    <div className=" flex-1 lg:hidden md:w-full md:h-full w-[325px] h-[268px] object-cover object-center">
                        <img src="/Images/lphomeiimg3.svg" alt="Security" className="w-full h-full" />
                    </div>

                    {/* Text Section */}
                    <div className='flex-1 w-full '>
                    {
                        OurProductCards.map((card,index) => {
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

