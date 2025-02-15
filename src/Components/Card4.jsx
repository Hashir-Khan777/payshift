import React from 'react'

function Card4({cards}) {
  // const [image,title,info]=card
  return (
    <div className='w-[302px] h-[493px] border-[4.29px] border-white rounded-[4.29px] py-[48px] px-[20px] flex flex-col justify-center items-center gap-[32px]'
     style={{
      //  background: "url('/Lpbg1.png') no-repeat",
    }}>
    <img src={cards.image} alt="image" className='h-[160px]' />
    <h1 className='font-lexend text-[20px]/[25px] font-[700]'>{cards.title}</h1>
    <p className='font-lexend text-[16px]/[20px] font-[400] text-center'>{cards.info}</p>
      
    </div>
  )
}

export default Card4
