import React from 'react'
import './AboutPage/AboutPage';

import HeroSection from '../components/HeroSection/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Commitments from '../components/Commitments/Commitments'
import Testimonials from '../components/Testimonials/Testimonials'

const HomePage = () => {
    return (
        <div>
            <div>
                <HeroSection />
            </div>
            <div className="section-spacing">
                <Commitments />
            </div>
            <div className="section-spacing">
                <FeaturedProducts />
            </div>
            <div className="section-spacing">
                <Testimonials />
            </div>
        </div>
    )
}

export default HomePage;