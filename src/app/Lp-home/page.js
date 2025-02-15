import LpHero from '@/app/Lp-home/LpHero'
import React from 'react'
import LpNavbar from '@/app/Lp-home/LpNavBar'
import OurProducts from './OurProducts'
import TransformBusiness from './TransformBusiness'
import Footer from '@/Components/Footer'
import SecurityMeasures from './SecurityMeasures'

const blackHeadingTransformBusiness = ["Transform","With Us"]
const blackHeadingSecurityMeasures = ["Our","Measures"]


function page() {
    return (
        <div>
            <LpNavbar />
            <LpHero />
            <OurProducts headingWhite="Our" headingBlack="Products" />
            <TransformBusiness headingWhite="Your Business" headingBlack={blackHeadingTransformBusiness} />
            <SecurityMeasures headingBlack={blackHeadingSecurityMeasures} headingWhite="Advance Security" />
            <Footer />
        </div>
    )
}

export default page
