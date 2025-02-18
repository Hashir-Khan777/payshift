import LpHero from '@/app/Lp-home/LpHero'
import React from 'react'
import LpNavbar from '@/app/Lp-home/LpNavBar'
import OurProducts from './OurProducts'
import TransformBusiness from './TransformBusiness'
import Footer from '@/Components/Footer'
import SecurityMeasures from './SecurityMeasures'
import { IndustrySolutions } from './IndustrySolutions'
import { IndustrySolMob } from './IndustrySolMob'


const blackHeadingTransformBusiness = ["Transform","With Us"]
const blackHeadingIndustrySolutions = ["Our","Solutions"]
const blackHeadingSecurityMeasures = ["Our","Measures"]



function page() {
    return (
        <div className='overflow-hidden'>
            <LpNavbar />
            <LpHero />
            <OurProducts headingWhite="Our" headingBlack="Products" />
            <div className='hidden lg:block'>
            <IndustrySolutions headingBlack={blackHeadingIndustrySolutions} headingWhite="Industry-Specific"/>
            </div>
            <div className='lg:hidden block'>
            <IndustrySolMob headingBlack={blackHeadingIndustrySolutions} headingWhite="Industry-Specific"/>
            </div>
            <TransformBusiness headingWhite="Your Business" headingBlack={blackHeadingTransformBusiness} />
            <SecurityMeasures headingBlack={blackHeadingSecurityMeasures} headingWhite="Advance Security" />
            <Footer />
        </div>
    )
}

export default page
