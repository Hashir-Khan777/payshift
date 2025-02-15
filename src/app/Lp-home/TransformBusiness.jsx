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


function TransformBusiness({headingWhite,headingBlack}) {
  return (
    <section className="relative w-full min-h-full bg-blue-300 py-[100px] bg-cover bg-center flex justify-center items-center"
    style={{
      // background: "url('/Lpbg1.png') no-repeat",
    }}>
      {/* Background Image */}

      
      <div
        className="z-10 w-full flex flex-col justify-center items-center gap-[20px]"
       >
        <h1 className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
        {headingBlack[0]}<span className="text-white pe-2">{headingWhite}</span>{headingBlack[1]}
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

export default TransformBusiness
