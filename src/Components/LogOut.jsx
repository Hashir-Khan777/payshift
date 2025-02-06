import React from 'react'


function LogOut({text}) {
    return (
        <div className="w-[90%] mx-auto md:h-[136px] h-[71px] md:py-[20px] md:px-[64px] p-[16px] flex justify-between items-center gap-4 border-2 border-white rounded-md"
            style={{
                background: "linear-gradient(0deg, #FFFFFF33, #FFFFFF )",
                boxShadow: "1px 1px 10px 2px rgba(0,0,0,0.25)"
            }}
        >

            <div className="flex flex-row gap-3">

                <p className="flex flex-col justify-start items-start gap-2 font-[600] md:text-[32px]/[40px] text-[12px]/[15px] text-center tracking-[4%] text-[#F93434] font-lexend">
                    {text}
                </p>
            </div>

            <img src="/svgIcons/arrowRight.svg" alt="Arrao" className="md:w-[31px] md:h-[31px] w-[16px] h-[16px]" />
        </div>
    )
}

export default LogOut
