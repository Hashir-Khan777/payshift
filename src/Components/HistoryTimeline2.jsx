const timelineData = [
    {
        yearRange: "2001 - 2005",
        title: "ESTABLISHMENT & EARLY YEARS",
        description: "Learn figure slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/officeBuilding.svg",
        image: "/Images/AboutImage2.png"
    },
    {
        yearRange: "2006 - 2007",
        title: "MAKING PAYMENT SOLUTIONS",
        description: "Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/credit.svg",
        image: "/Images/AboutImage3.png"
    },
    {
        yearRange: "2008 - 2010",
        title: "ENHANCING GATEWAY FEATURES",
        description: "Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/invoice-icon.svg",
        image: "/Images/Aboutmage4.png"
    },
    {
        yearRange: "2010 - 2015",
        title: "Enhancing DCC Features",
        description: "Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/payment-device.svg",
        image: "/Images/AboutImage5.png"
    },
    {
        yearRange: "2015 - 2024",
        title: "AI Payment Solutions",
        description: "Learn foam slide #1 next, connecteur adjusting drill",
        icon: "/svgIcons/receipt.svg",
        image: "/Images/AboutImage6.png"
    },
];

export default function HistoryTimeline({ headingWhite, headingBlack }) {
    return (
        <section class="relative bg-gradient-to-b from-blue-50 to-white p-8 rounded-lg shadow-md">
            {
                timelineData.map((item) => {
                    return (

                        <>
                            {/* <!-- Top Border --> */}
                            <div class="absolute top-0 left-0 w-full h-1 bg-blue-300"></div>

                            {/* <!-- Icon at the Top --> */}
                            <div class="absolute -top-6 left-10 bg-white p-3 rounded-full border border-gray-300 shadow-md">
                                <img src={item.icon} />
                            </div>

                            {/* <!-- Content --> */}
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                                <div>
                                    <p class="text-gray-500">{item.yearRange}</p>
                                    <h2 class="text-xl font-bold text-gray-900">{item.title}</h2>
                                    <p class="text-gray-600 mt-2">{item.description}</p>
                                </div>
                                <div>
                                    <img src={item.image} alt="History Illustration" class="rounded-lg shadow-md w-full" />
                                </div>
                            </div>
                        </>

                    )
                })
            }




            <div class="flex justify-end mt-4 space-x-3">
                <button class="p-2 bg-gray-200 rounded-full shadow-md">⬅</button>
                <button class="p-2 bg-gray-200 rounded-full shadow-md">➡</button>
            </div>
        </section>

    );
}
