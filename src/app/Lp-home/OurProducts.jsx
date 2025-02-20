import Card4 from '@/Components/Card4'
import React from 'react'

const OurProductCards = [
  {
    image: "/Images/ourProduct1.svg",
    title: "Payment Gateway",
    info: "We offer a range of payment options, including PayByLinks,QR codes, and recurring billing, along with e-invoicing and other features. Our advanced fraud prevention tools provide added protection."
  },
  {
    image: "/Images/ourProduct2.svg",
    title: "SOFTPOS",
    info: "Ensure secure payments with our fully PCI MPOC compliant solution. Quick onboarding makes it easy for SMEs and mobile merchants to get started. No extra hardware is required for this."
  },
  {
    image: "/Images/ourProduct3.svg",
    title: "ANALYTICS",
    info: "Drive deeper insights with data visualization, comprehensive reporting, customer analytics, and AI-driven intelligence."
  },
  {
    image: "/Images/ourProduct4.svg",
    title: "DCC",
    info: "Maximize revenue, gain rate transparency, leverage real- time exchange, and stay compliant with all regulations and scheme rules."
  },
]

function OurProducts({ headingWhite, headingBlack }) {
  return (
    <section  className="bg-cover bg-no-repeat md:bg-right-top bg-center relative w-full min-h-full py-[100px]  flex justify-center items-center"
      style={{ backgroundImage: "url('/Images/industrySolBg.png')" }}>
      {/* Background Image */}

      <div
        className="z-10 w-full flex flex-col justify-center items-center gap-[20px]"
      >
        <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
          <span className="text-white px-2">{headingWhite}</span>{headingBlack}
        </h1>

        <div className='flex flex-row flex-wrap justify-center items-center gap-[20px] p-[80px]'>
          {
            OurProductCards.map((card, index) => <Card4 key={index} cards={card} />)
          }
        </div>

      </div>
    </section>
  )
}

export default OurProducts
