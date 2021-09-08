import React from 'react';

const CounterCard = (props) => {
    return (
        <>
            <div className='counter_card'>
                <div className='counter_card_items'>
                    <div className='counter_card_img'>
                        <img src={props.img} alt='img' />
                    </div>

                    <div className='counter_card_content'>
                        <h2> {props.card_heading} </h2>
                        <p> {props.card_description} </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterCard;