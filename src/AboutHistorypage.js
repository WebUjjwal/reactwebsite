import React from 'react';
import SectionTitle from './SectionTitle';
import AboutHistorypagecard from './AboutHistorypagecard';

const AboutHistorypage = () => {
    return (
        <>
            <section id='about_historypage_bg'>
                <SectionTitle 
                    section_tag='section_tag'
                    section_heding='History Begins in 2010'
                />
                <div className='container'>
                    <div className='row'>

                        <AboutHistorypagecard 
                        heading='Founded'
                        para='Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.'
                        year='2010'
                        month='February 20th'
                        img='./img/found.jpg'/>

                        <AboutHistorypagecard 
                        heading='Global Success'
                        para='Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.'
                        year='2013'
                        month='January 14th'
                        img='./img/success.jpg'/>

                        <AboutHistorypagecard 
                        heading='Founded Data Center'
                        para='Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.'
                        year='2016'
                        month='March 25th'
                        img='./img/data_center.jpg'/>

                        <AboutHistorypagecard 
                        heading='International Award'
                        para='Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.'
                        year='2020'
                        month='December 10th'
                        img='./img/award.jpg'/>

                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutHistorypage;