import React from 'react';
import AboutChoosesection from './AboutChoosesection';

const AboutChoose = () => {
    return (
        <>
            <div className='section_title'>
                <p className='section_tag'>PEOPLE LOVE US</p>
                <h2 className='section_heding'>Why Choose Us?</h2>
                <p className='section_descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna.</p>
            </div>

            <AboutChoosesection 
            heading1='Data for All Your People'
            para1='Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.'
            heading2='A New Breed of AI'
            para2='Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.'
            heading3='Analytics Business'
            para3='Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.'
            img='./img/choose.png' className='img-fluid'/>
        </>
    );
};

export default AboutChoose;