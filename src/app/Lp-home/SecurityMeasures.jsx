import Card4 from '@/Components/Card4'
import React from 'react'

const OurProductCards = [
    {
        image: "/Images/lpHomeimg1.png",
        title: "Payment Gateway",
        info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
    },
    {
        image: "/Images/lpHomeimg1.png",
        title: "Payment Gateway",
        info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
    },
    {
        image: "/Images/lpHomeimg1.png",
        title: "Payment Gateway",
        info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
    },
    {
        image: "/Images/lpHomeimg1.png",
        title: "Payment Gateway",
        info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
    },
]


function SecurityMeasures({ headingWhite, headingBlack }) {
    return (
        <section className="relative w-[100vw] min-h-full bg-blue-600 py-[100px] px-[80px] bg-cover bg-center flex justify-center items-center"
            style={{
                // background: "url('/Lpbg1.png') no-repeat",
            }}>
            {/* Background Image */}


            <div
                className="z-10 w-full flex flex-col justify-center items-center gap-[50px]"
            >
                <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
                    {headingBlack[0]}<span className="text-white px-2">{headingWhite}</span>{headingBlack[1]}
                </h1>

                <div className='w-full flex md:flex-row flex-col justify-center items-center gap-[20px] md:p-[80px] p-[10px]'>
                    <div className='md:w-[40%] w-[325px] bg-red-500'>
                        {/* <img src="/lphomeimg2.svg" alt="" /> */}
                        <img src="/Images/lphomeiimg3.svg" alt="" />
                    </div>
                    <div className='md:w-[45%] w-[100%] flex flex-col md:gap-[40px] gap-[20px] px-[24px] bg-red-500'>
                        <div className='flex flex-row gap-[32px] justify-center items-center'>
                            <img src="/svgIcons/grCheckmark.svg" alt="" className='w-[32px] h-[32px]' />
                            <p className='tracking-[4%] font-lexend font-[700] md:text-[25px]/[31.25px] text-[14px]/[17.5px]'>
                                Advanced Fraud
                                Prevention
                                <span className='font-[400]'> measures to protect
                                    your business: highlights proactive protection.</span>
                            </p>
                        </div>
                        <div className='flex flex-row gap-[32px] justify-center items-center '>
                            <img src="/svgIcons/grCheckmark.svg" alt=""  className='w-[32px] h-[32px]' />
                            <p className='tracking-[4%] font-lexend font-[700] text-[25px]/[31.25px]'>
                                Advanced Fraud
                                Prevention
                                <span className='font-[400]'> measures to protect
                                    your business: highlights proactive protection.</span>
                            </p>
                        </div>
                        <div className='flex flex-row gap-[32px] justify-center items-center  '>
                            <img src="/svgIcons/grCheckmark.svg" alt=""  className='w-[32px] h-[32px]' />
                            <p className='tracking-[4%] font-lexend font-[700] text-[25px]/[31.25px]'>
                                Advanced Fraud
                                Prevention
                                <span className='font-[400]'> measures to protect
                                    your business: highlights proactive protection.</span>
                            </p>
                        </div>
                        <div className='flex flex-row gap-[32px] justify-center items-center '>
                            <img src="/svgIcons/grCheckmark.svg" alt=""  className='w-[32px] h-[32px]' />
                            <p className='tracking-[4%] font-lexend font-[700] text-[25px]/[31.25px]'>
                                Advanced Fraud
                                Prevention
                                <span className='font-[400]'> measures to protect
                                    your business: highlights proactive protection.</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SecurityMeasures
