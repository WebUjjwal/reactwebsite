import React from 'react';
import Aboutus from './Aboutus';
import AboutBanner from './AboutBanner';
import AboutChoose from './AboutChoose';
import AboutHistory from './AboutHistory';
import AboutProcess from './AboutProcess';
import AboutScientist from './AboutScientist';
import Footer from './Footer';
import Testimonial from './Testimonial';


const About =() => {
    return (
        <>
            <AboutBanner />
            <Aboutus />
            <AboutHistory />
            <AboutChoose />
            <AboutProcess />
            <AboutScientist />
            <Testimonial />
            <Footer />
        </>
    );
};

export default About;