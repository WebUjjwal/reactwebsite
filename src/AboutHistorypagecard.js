import React from 'react';

const About_historypagecard = (props) => {
    return  (
        <>
            <div className='col-md-12'>
                <div className='about_history_card'>
                        <div className='about_history_card_content'>
                            <h1>{props.heading}</h1>
                            <p>{props.para}</p>
                            <br />
                            <span>{props.year}</span><br/>
                            <small className='about_title'>{props.month}</small>
                        </div>

                        <div className='about_history_card_img'>
                            <img src={props.img} className='img-fluid' alt='img' />
                        </div>
                </div>
            </div>
        </>
    );
};

export default About_historypagecard;