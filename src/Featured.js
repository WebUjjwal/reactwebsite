import React from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    return(
        <>
            <div className='featured_background'>
                <div className='section_title'>
                    <p className='section_tag'>OUR SERVICES</p>
                    <h2 className='section_heding'>Our Featured Services</h2>
                    <p className='section_descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className='featured_main-container'>
                    <div className='featured_box_container'>
                        <FeaturedCard 
                        img = './img/f_img_1.png'
                        fea_box_title = 'Marketing Analysis'
                        fea_box_descrip = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
                        />

                        <FeaturedCard 
                        img = './img/f_img_2.png' 
                        fea_box_title = 'Email Marketing'
                        fea_box_descrip = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
                        />
                        
                        <FeaturedCard
                        img = './img/f_img_3.png'
                        fea_box_title = 'Website Optimization'
                        fea_box_descrip = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;