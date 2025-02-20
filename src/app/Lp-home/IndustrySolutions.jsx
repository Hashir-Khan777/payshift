"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  {
    title: "Education",
    description:
      "Streamline your processes with our secure, PCI DSS compliant platform. Accept online payments, set flexible payment plans, automate reconciliation and much more for a seamless, integrated payment experience",
    image: "/Images/industrySol1.jpg",
    alt: "Education",
  },
  {
    title: "Real Estate",
    description:
      "Automate customer payment collections of installment, rent, service charge,Collect payment through cards, bank transfer, auto debits and gain advanced data insights with our real estate platform. Seamless integration with your CRM and ERP enhances the experience for customers, developers, and agents.",
    image: "/Images/industrySol2.jpg",
    alt: "Real Estate",
  },
  {
    title: "Hospitality",
    description:
      "Our platform enables businesses to seamlessly accept payments, integrate with booking systems, and offer flexible payment options for customers. By enhancing the payment experience, our solution boosts operational efficiency and customer satisfaction, ensuring a smooth process from booking to dining and checkout. Automated reconciliation streamlines financial tracking, making it easier for businesses to manage transactions.",
    image: "/Images/industrySol3.jpg",
    alt: "Hospitality",
  },
  {
    title: "SME",
    description:
      "Our SME payment solutions enable secure online and offline payments with options like Payment Gateway, SoftPOS, PayByLink, and invoicing. Integrated with cash registers, accounting, and CRM systems, businesses can streamline transactions and improve efficiency. Automated reconciliation simplifies financial tracking, letting SMEs focus on growth and customer experience.",
    image: "/Images/industrySol4.jpg",
    alt: "SME",
  },
];

export function IndustrySolutions({
  headingBlack = ["Our", "Solutions"],
  headingWhite,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="bg-cover bg-center bg-no-repeat  px-4 sm:px-6 md:pt-[100px] evolution"
      style={{ backgroundImage: "url('/Images/industrySolBg.svg')" }}
    >
      <div className="w-full flex flex-col gap-[80px] px-[100px]">
        {/* Header */}
        <div className="text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-xl md:text-4xl font-medium font-cashdisplay"
          >
            {headingBlack?.[0] || ""}
            <span className="text-white px-2">{headingWhite}</span>
            {headingBlack?.[1] || ""}
          </motion.h1>
        </div>

        {/* Timeline */}
        <div className="w-full relative px-2 ">
          {/* Timeline Line */}
          <div className=" w-full flex flex-col gap-10 " />

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`w-full  lg:h-[500px] flex justify-between items-center md:gap-20 mb-[200px] ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } animate-slideUp`}
            >
              {/* Image Section */}
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex-1 h-[250px] md:h-[300px] lg:h-[350px] xl:h-full"
                style={{
                  boxShadow: "1px 3px 20px 10px #8b96dd",
                }}
              >
                <div className="relative h-full w-full overflow-hidden shadow-2xl object-center object-cover">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text Content Section */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex-1 flex flex-col gap-[24px] justify-center text-center py-5 px-4"
              >
                <h4 className="text-[25px]/[30px] lg:text-[32px]/[40px] font-[700] text-black font-lexend break-words ">
                  {item.title}
                </h4>
                <p
                  className="word-break-auto-phrase lg:text-[24px]/[30px] text-[15px]/[20px] font-lexend  text-black"
                  style={{ wordBreak: "auto-phrase" }}
                >
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
