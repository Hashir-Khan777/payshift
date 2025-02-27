import Image from "next/image";

const timelineItems = [
  {
    title: "EDUCATION",
    description:
      "Streamline your processes with our secure, PCI DSS compliant platform. Accept online payments, set flexible payment plans, automate reconciliation and much more for a seamless, integrated payment experience",
    image: "/Images/industrySol1.jfif",
    alt: "Education",
  },
  {
    title: "REAL ESTATE",
    description:
      "Automate customer payment collections of installment, rent, service charge,Collect payment through cards, bank transfer, auto debits and gain advanced data insights with our real estate platform. Seamless integration with your CRM and ERP enhances the experience for customers, developers, and agents.",
    image: "/Images/industrySol2.jfif",
    alt: "Real Estate",
  },
  {
    title: "HOSPITALITY",
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
];

export function IndustrySolMob({
  headingBlack = ["Our", "Solutions"],
  headingWhite,
}) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat  p-[40px] evolution"
      id="solutions"
      style={{ backgroundImage: "url('/Images/industrySolBg.svg')" }}
    >
      <div className="w-full mx-auto md:px-[100px] flex flex-col gap-[40px]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
            {headingBlack?.[0] || ""}
            <span className="text-white px-2">{headingWhite}</span>
            {headingBlack?.[1] || ""}
          </h1>
        </div>

        {/* Timeline */}
        <div className="w-full relative">
          {/* Timeline Line */}
          <div className="w-full flex flex-col gap-[40px] " />

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="shadow-2xl mb-[40px] bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/Images/industrySolBg.svg')",
                boxShadow: "1px 2px 20px 5px #8b96dd",
              }}
            >
              <div
                key={index}
                className={`w-full md:h-[500px] flex flex-col justify-center items-center gap-[30px]  px-[20px] py-[40px] border-[4.29px] rounded-[4.29px] border-white`}
              >
                {/* Image Section */}

                <div className="relative h-full w-full overflow-hidden shadow-2xl object-center object-cover min-h-[158px]">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full drop-shadow-[0_0_30px_rgba(106,177,49,0.5)]"
                  />
                </div>

                {/* Text Content Section */}

                <h4 className="mb-2 text-lg sm:text-[32px]/[40px] font-[700] text-black font-lexend break-words  text-center">
                  {item.title}
                </h4>
                <p
                  className="word-break-auto-phrase text-sm sm:text-[24px]/[30px] font-lexend  text-black text-center"
                  style={{ wordBreak: "auto-phrase" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
