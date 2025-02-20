"use client"

import Card4 from '@/Components/Card4'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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


function TransformBusiness({ headingWhite, headingBlack }) {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className="relative w-full min-h-full py-[100px] bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url('/Images/transformBusinessBg.png')"
      }}>
      {/* Background Image */}


      <div
        className="z-10 w-full flex flex-col justify-center items-center gap-[20px]"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-[28px]/[34.44px] md:text-4xl font-medium font-cashdisplay">
          {headingBlack[0]}<span className="text-white pe-2">{headingWhite}</span>{headingBlack[1]}
        </motion.h1>

        <div className='flex flex-row flex-wrap justify-center items-center gap-[20px] p-[80px]'>
          {OurProductCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <Card4 cards={card} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TransformBusiness
