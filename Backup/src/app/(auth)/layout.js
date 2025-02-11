"use client";
import React from 'react';
import SignComponent2 from '@/components/SignComponent2';

export default function AuthLayout({ children }) {
  return (
    <section className='w-full overflow-x-hidden'>
      {/* Video Header */}
      <div className='w-full relative'>
        <div className='absolute top-0 left-0 w-full md:h-[316px] h-[140px] overflow-hidden z-0 opacity-[0.4]'>
          <video
            className='w-full h-full object-cover object-center'
            autoPlay
            muted
            loop
          >
            <source src="/Images/video.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className='relative md:h-[316px] h-[140px] z-10 flex items-center justify-center shadow-lg'>
          <img 
            src="/svgIcons/payshiftLogo.svg" 
            alt="PayShift Logo" 
            className='md:w-[300px] md:h-[99.4px] w-[147.25px] h-[46.5px]' 
          />
        </div>
      </div>

      {/* SignComponent will handle the rest */}
      <SignComponent2 />
    </section>
  )
}