import Image from "next/image"

const timelineItems = [
    {
        title: "Education",
        description:
            "Streamline your processes with our secure, PCI DSS compliant platform. Accept online payments, set flexible payment plans, automate reconciliation and much more for a seamless, integrated payment experience",
        image: "/Images/industrySol1.jfif",
        alt: "Education",
    },
    {
        title: "Real Estate",
        description:
            "Automate customer payment collections of installment, rent, service charge,Collect payment through cards, bank transfer, auto debits and gain advanced data insights with our real estate platform. Seamless integration with your CRM and ERP enhances the experience for customers, developers, and agents.",
        image: "/Images/industrySol2.jfif",
        alt: "Real Estate",
    },
    {
        title: "Hospitality",
        description:
            "Our platform enables businesses to seamlessly accept payments, integrate with booking systems, and offer flexible payment options for customers. By enhancing the payment experience, our solution boosts operational efficiency and customer satisfaction, ensuring a smooth process from booking to dining and checkout. Automated reconciliation streamlines financial tracking, making it easier for businesses to manage transactions.",
        image: "/Images/industrySol3.jfif",
        alt: "Hospitality",
    },
    {
        title: "SME",
        description:
            "Our SME payment solutions enable secure online and offline payments with options like Payment Gateway, SoftPOS, PayByLink, and invoicing. Integrated with cash registers, accounting, and CRM systems, businesses can streamline transactions and improve efficiency. Automated reconciliation simplifies financial tracking, letting SMEs focus on growth and customer experience.",
        image: "/Images/industrySol4.jfif",
        alt: "SME",
    },
]

export function IndustrySolutions({ headingBlack = ["Our", "Solutions"], headingWhite }) {
    return (
        <section
            className="bg-cover bg-center bg-no-repeat  px-4 sm:px-6 md:pt-[100px] evolution"
            style={{ backgroundImage: "url('/Images/industrySolBg.svg')" }}
        >

            <div className="w-full flex flex-col gap-[80px] px-[100px]">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-center text-xl md:text-4xl font-medium font-cashdisplay">
                        {headingBlack?.[0] || ""}
                        <span className="text-white px-2">{headingWhite}</span>
                        {headingBlack?.[1] || ""}
                    </h1>

                </div>

                {/* Timeline */}
                <div className="w-full relative px-2 ">
                    {/* Timeline Line */}
                    <div className=" w-full flex flex-col gap-10 " />

                    {timelineItems.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full  lg:h-[500px] flex justify-between items-center md:gap-20 mb-[200px] ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} animate-slideUp`}
                        >
                            {/* Image Section */}
                            <div className="flex-1 h-[250px] md:h-[300px] lg:h-[350px] xl:h-full"
                            style={{
                                boxShadow:"1px 3px 20px 10px #8b96dd"
                            }}>
                                <div className="relative h-full w-full overflow-hidden shadow-2xl object-center object-cover">
                                    <img
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text Content Section */}
                            <div className="flex-1 flex flex-col gap-[24px] justify-center text-center py-5 px-4">
                                <h4 className="text-[25px]/[30px] lg:text-[32px]/[40px] font-[700] text-black font-lexend break-words hyphens-auto">
                                    {item.title}
                                </h4>
                                <p className="lg:text-[24px]/[30px] text-[15px]/[20px] font-lexend break-words hyphens-auto text-black">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}




                    {/* {timelineItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative  mb-16 lg:mb-32 ${index % 2 === 0 ? "pr-1/2" : "pl-1/2"} animate-slideUp`}
                        >
                            <div className="flex flex-row items-center justify-center gap-4 ">
                                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8 order-last"}`}>
                                    <div className="relative h-[500px] w-[650px] shadow-2xl object-cover overflow-hidden object-center">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.alt} className="drop-shadow-[0_0_30px_rgba(106,177,49,0.5)]"
                                        />
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2">
                                    <div className="h-3 w-3 rounded-full bg-primary" />
                                </div>

                                <div className={`w-1/2 text-center  py-5  ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                                    <h3 className="mb-2 text-xl font-bold text-primary">{item.date}</h3>
                                    <h4 className="mb-2 text-lg sm:text-[32px]/[40px] font-[700] text-black font-lexend break-words hyphens-auto">{item.title}</h4>
                                    <p className="text-sm sm:text-[24px]/[30px] font-lexend  break-words hyphens-auto text-black">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </section>
    )
}