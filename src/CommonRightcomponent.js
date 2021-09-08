import React from 'react';

const Common_R_component = (props) => {
    return(
        <>
            <div className='container main_common_R-component'>
                <div className='row'>
                <div className='col-md-6 common_R_items'>
                    <div className='common_R_img'>
                        <img src={props.img} className='img-fluid' alt='img' />
                    </div>
                    </div>
                    <div className='col-md-6 gy-5 common_R_content'>
                        <p className='section_tag'> {props.section_tag} </p>
                        <h2> {props.heading} </h2>
                        <p className='heading_description'> {props.description} </p>

                        <div className='row option_items'>
                            <div className='col-md-6 left_option'>
                                <div className='option'> {props.option_1} </div>
                                <div className='option'> {props.option_2} </div>
                                <div className='option'> {props.option_3} </div>
                            </div>

                            <div className='col-md-6 right_option'>
                                <div className='option'> {props.option_4} </div>
                                <div className='option'> {props.option_5} </div>
                                <div className='option'> {props.option_6} </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Common_R_component;