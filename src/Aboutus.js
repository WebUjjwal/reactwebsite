import React from 'react';
import AboutType from './AboutType';

const Aboutus = () => {
    return (
        <>
        <div className='container aboutus'>
            <div className='row'>
            <div className='col-md-4 col-12'>
                    <AboutType 
                    heading='Our History'
                    para='Real innovations and a positive customer experience are the heart of successful communication.'
                    point1='Activate Listening'
                    point2='Brilliant minds'
                    point3='Better. Best. Wow!'
                    point4='Branding it better!'/>
                </div>                
                
                <div className='col-md-4 col-12'>
                    <AboutType 
                    heading='Our Mission'
                    para='Real innovations and a positive customer experience are the heart of successful communication.'
                    point1='Creating. Results.'
                    point2='Expect more'
                    point3='Good thinking'
                    point4='In real we trust'/>
                </div>                
                
                <div className='col-md-4 col-12'>
                    <AboutType 
                    heading='Who we are'
                    para='Real innovations and a positive customer experience are the heart of successful communication.'
                    point1='Stay real. Always.'
                    point2='We have you covered'
                    point3='We turn heads'
                    point4='Your brand, promoted'/>
                </div>
            </div>

            <img src='./img/globe_circle.png' alt='img' />
            
        </div>
        </>
    );
};

export default Aboutus;