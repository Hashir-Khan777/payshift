import LpHero from '@/app/Lp-home/LpHero'
import React from 'react'
import LpNavbar from '@/app/Lp-home/LpNavBar'
import OurProducts from './OurProducts'
import TransformBusiness from './TransformBusiness'
import Footer from '@/Components/Footer'
import SecurityMeasures from './SecurityMeasures'
import { IndustrySolutions } from './IndustrySolutions'


const blackHeadingTransformBusiness = ["Transform","With Us"]
const blackHeadingIndustrySolutions = ["Our","Solutions"]
const blackHeadingSecurityMeasures = ["Our","Measures"]



function page() {
    return (
        <div className='overflow-hidden'>
            <LpNavbar />
            <LpHero />
            <OurProducts headingWhite="Our" headingBlack="Products" />
            <IndustrySolutions headingBlack={blackHeadingIndustrySolutions} headingWhite="Industry-Specific"/>
            <TransformBusiness headingWhite="Your Business" headingBlack={blackHeadingTransformBusiness} />
            <SecurityMeasures headingBlack={blackHeadingSecurityMeasures} headingWhite="Advance Security" />
            <Footer />
        </div>
    )
}

export default page
