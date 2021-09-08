import React from 'react';

const AboutCard = (props) => {
    return (
        <>
            <div className='about_card'>
                <div className='about_card_item'>
                    <div className='about_card_img'>
                        <img src={props.img} alt='about_img' />
                    </div>

                    <div className='about_card_content'>
                        <h2> {props.about_heading} </h2>
                        <p> {props.about_description} </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutCard;
