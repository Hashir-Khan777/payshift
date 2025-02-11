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
    <div className="w-full py-[64px] px-[40px]"
      style={{
        background: "linear-gradient(90deg,#C2DEFF, #FFFFFF)"
      }}
    >
      <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
        <span className="text-white pe-2">{headingWhite}</span>{headingBlack}
      </h1>

      <div className="relative mt-8">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-12 border-l-2 border-white pb-10 last:pb-0 flex flex-col gap-[20px]">
            
            {/* Circular Icon Container */}
            <div className="absolute w-10 h-10 bg-[#C2DEFF] border-2 border-white rounded-full -left-[20px] top-0 flex items-center justify-center shadow-md">
              <img src={item.icon} alt="icon" className="w-5 h-5" />
            </div>

            {/* Year Range */}
            <div className="flex flex-col gap-[4px]">
              <span className="text-[16px]/[25px] font-lexend font-[300] text-gray-600">
                {item.yearRange}
              </span>
              {/* Title */}
              <h2 className="text-[16px]/[25px] font-lexend font-[600] text-black">{item.title}</h2>
            </div>

            {/*Image */}
           
              <div className="w-[250px] h-[180px] overflow-hidden flex items-center justify-center">
                <img src={item.image} alt="timeline" className="w-full h-full object-cover object-center" 
                  style={{ boxShadow: "0px 2px 10px 0px rgba(0, 69, 197, 0.64)",}}
                />
              </div>

              {/* Description */}
            <p className="text-gray-600 text-[12px]/[19.2px] font-lexend font-[400]">{item.description}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
}
