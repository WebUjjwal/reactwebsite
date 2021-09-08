import React from 'react';
import CounterCard from './CounterCard';

 const Counter = () => {
     return(
        <>
            <div className='main_counter_section'>
                <div className='counter_items'>
                    <CounterCard 
                    img='./img/counter_img_1.png'
                    card_heading='10 Years'
                    card_description='On the market'/>

                    <CounterCard 
                    img='./img/counter_img_1.png'
                    card_heading='10 Years'
                    card_description='On the market'/>

                    <CounterCard 
                    img='./img/counter_img_1.png'
                    card_heading='10 Years'
                    card_description='On the market'/>

                    <CounterCard 
                    img='./img/counter_img_1.png'
                    card_heading='10 Years'
                    card_description='On the market'/>
                </div>
            </div>
        </>
     );
 };

 export default Counter;