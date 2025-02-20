import Card4 from '@/Components/Card4'
import React from 'react'

const OurProductCards = [
  {
    image: "/Images/transformBus1.svg",
    title: "IMPLEMENT",
    info: "Choose the Right Solutions."
  },
  {
    image: "/Images/transformBus2.svg",
    title: "INTEGRATE",
    info: "Connect with your systems."
  },
  {
    image: "/Images/transformBus3.svg",
    title: "OPTIMIZE",
    info: "Improve performance and experience."
  },
  {
    image: "/Images/transformBus4.svg",
    title: "GROW",
    info: "Expand your business."
  },
]


function TransformBusiness({headingWhite,headingBlack}) {
  return (
    <section className="relative w-full min-h-full py-[100px] bg-cover bg-center flex justify-center items-center"
    style={{
      backgroundImage:"url('/Images/transformBusinessBg.png')"
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
