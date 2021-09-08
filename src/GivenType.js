import React from 'react';
import GivenCard from './GivenCard';

const GivenType = () => {
    return (
        <>
         <div className='container given_container'>
             <div className='row'>

                <GivenCard 
                img='./img/startup.png' className='img-fluid' alt='img'
                heading='Startup Applications'
                para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.'/>

                <GivenCard 
                img='./img/solution.png' className='img-fluid' alt='img'
                heading='SaaS Solutions'
                para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.'/>

                <GivenCard 
                img='./img/research.png' className='img-fluid' alt='img'
                heading='Research'
                para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.'/>

                <GivenCard 
                img='./img/ecommerce.png' className='img-fluid' alt='img'
                heading='eCommerce Platforms'
                para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.'/>

                <GivenCard 
                img='./img/diagram.png' className='img-fluid' alt='img'
                heading='Analytics'
                para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.'/>

                <GivenCard 
                img='./img/chip.png' className='img-fluid' alt='img'
                heading='Technology'
                para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.'/>

             </div>
         </div>
        </>
    );
};

export default GivenType;