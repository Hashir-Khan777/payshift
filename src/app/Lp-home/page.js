import LpHero from '@/app/Lp-home/LpHero'
import React from 'react'
import LpNavbar from '@/app/Lp-home/LpNavBar'
import OurProducts from './OurProducts'
import TransformBusiness from './TransformBusiness'
import Footer from '@/Components/Footer'
import SecurityMeasures from './SecurityMeasures'
import { IndustrySolutions } from './IndustrySolutions'
import { IndustrySolMob } from './IndustrySolMob'
import OurProductSlider from './OurProSlider'
import TranformBusinessSlider from './TransformbusSlider'
import Link from "next/link";



const blackHeadingTransformBusiness = ["Transform", "With Us"]
const blackHeadingIndustrySolutions = ["Our", "Solutions"]
const blackHeadingSecurityMeasures = ["Our", "Measures"]



function page() {

    return (
        <div className='overflow-hidden'>
            <LpNavbar />
            <LpHero />

            <div className='md:block hidden' id='products'>
                <OurProducts headingWhite="Our" headingBlack="Products" />
            </div>

            <div className='block md:hidden' id='products'>
                <OurProductSlider headingWhite="Our" headingBlack="Products" />
            </div>

            <div className='hidden md:block'>
                <IndustrySolutions headingBlack={blackHeadingIndustrySolutions} headingWhite="Industry-Specific" />
            </div>

            <div className='lg:hidden block'>
                <IndustrySolMob headingBlack={blackHeadingIndustrySolutions} headingWhite="Industry-Specific" />
            </div>

            <div className='md:block hidden'>
                <TransformBusiness headingWhite="Your Business" headingBlack={blackHeadingTransformBusiness} />
            </div>
            <div className='block md:hidden'>
                <TranformBusinessSlider headingWhite="Your Business" headingBlack={blackHeadingTransformBusiness} />
            </div>


            <SecurityMeasures headingBlack={blackHeadingSecurityMeasures} headingWhite="Advanced Security" />
            <Footer />
        </div>
    )
}

export default page
