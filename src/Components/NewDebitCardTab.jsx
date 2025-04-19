"use client";

import React, { useRef, useState } from "react";
import { FaEye, FaChevronDown } from "react-icons/fa";
import "swiper/css";
import { MdOutlineLibraryAdd  } from "react-icons/md";
import "swiper/css/navigation";

const data = [
    {
        id: 1,
        name: "Hamod Salem Naser",
        dda: "12345",
        ref: "AP7HV4V",
        date: "12-May-2025",
        status: "Pending Bank Submission",
    },
    {
        id: 2,
        name: "Hamod Salem Naser",
        dda: "12345",
        ref: "AP7HV4V",
        date: "12-May-2025",
        status: "Pending",
    },
    {
        id: 3,
        name: "Hamod Salem Naser",
        dda: "12345",
        ref: "AP7HV4V",
        date: "12-May-2025",
        status: "Pending Bank Submission",
    },
    {
        id: 4,
        name: "Hamod Salem Naser",
        dda: "12345",
        ref: "AP7HV4V",
        date: "12-May-2025",
        status: "Pending",
    },
    {
        id: 5,
        name: "Hamod Salem Naser",
        dda: "12345",
        ref: "AP7HV4V",
        date: "12-May-2025",
        status: "Pending Bank Submission",
    },
];


const NewDebitCardTab = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [mounted, setMounted] = useState(false);

    const prevRef = useRef(null);
    const nextRef = useRef(null);



    return (
        <>
            <div
                className={`font-lexend shrink-0 mx-auto md:w-[80%] w-full py-16 px-3 md:px-6 border-white m-10 md:mb-24`}
                style={{
                    background:
                        "linear-gradient(180deg, #FFFFFF 16%, #C2DEFF 100%)",
                    boxShadow: "0px 4px 24px 0px rgba(0, 69, 197, 0.48)",
                }}
            >
                <div
                    className={`flex justify-center items-center gap-4`}
                >
                    <div>
                        <MdOutlineLibraryAdd  size={55} />
                    </div>
                    <div>
                        <h1
                            className={`md:text-4xl text-500`}
                        >
                            Add New
                        </h1>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-left font-medium  overflow-hidden">
                    <thead>
                        <tr className="bg-black text-white text-[13px]">
                            <th className="py-3 px-4 font-medium">#</th>
                            <th className="py-3 px-4 font-medium">Customer Name</th>
                            <th className="py-3 px-4 font-medium">DDA No.</th>
                            <th className="py-3 px-4 font-medium">Reference No</th>
                            <th className="py-3 px-4 font-medium">Date</th>
                            <th className="py-3 px-4 font-medium">Status</th>
                            <th className="py-3 px-4 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr
                                key={row.id}
                                className={`${idx % 2 !== 0 ? "bg-[#f1f6ff]" : "bg-white"} border-b`}
                            >
                                <td className="py-3 px-4">{row.id}</td>
                                <td className="py-3 px-4">{row.name}</td>
                                <td className="py-3 px-4">{row.dda}</td>
                                <td className="py-3 px-4">{row.ref}</td>
                                <td className="py-3 px-4">{row.date}</td>
                                <td className="py-3 px-4 text-sm">{row.status}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 bg-white border rounded-md shadow-sm hover:bg-gray-100 transition">
                                            <FaEye className="text-black text-sm" />
                                        </button>
                                        <button className="p-2 bg-white border rounded-md shadow-sm hover:bg-gray-100 transition">
                                            <FaChevronDown className="text-black text-sm" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between">
                <div
                    class="ml-4 text-sm flex-1 flex justify-center items-center m-auto"
                >
                    Showing 10/28 Results
                </div>

                <div className="p-4 mt-4 flex justify-end items-end gap-4 container flex-1 mr-6">
                    <button className="text-3xl" aria-label="Scroll Left">
                        <img
                            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px] rotate-180"
                            src="/svgIcons/slidericon.svg" />
                    </button>
                    <button className="text-3xl" aria-label="Scroll Right">
                        <img
                            className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
                            src="/svgIcons/slidericon.svg" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewDebitCardTab;
