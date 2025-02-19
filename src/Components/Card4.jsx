import React from 'react'

function Card4({cards}) {
  // const [image,title,info]=card
  return (
    <div className='w-[302px] h-[493px] border-[2.29px] border-white rounded-[4.29px] py-[48px] px-[20px] flex flex-col justify-center items-center gap-[32px] bg-left bg-no-repeat bg-cover'
    style={{ backgroundImage: "url('/Images/industrySolBg.svg')",
    boxShadow:"1px 2px 20px 5px #8b96dd"
     }}
    >
    <img src={cards.image} alt="image" className='h-[200px] w-[200px]' />
   
    <h1 className='font-lexend text-[20px]/[25px] font-[700] uppercase'>{cards.title}</h1>
    <p className='font-lexend text-[16px]/[20px] font-[400] text-center'>{cards.info}</p>

   
    </div>
  )
}

export default Card4

