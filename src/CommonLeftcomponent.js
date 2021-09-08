import React from 'react';

const Common_L_component = (props) => {
    return(
        <>
            <div className='container '>
                <div className='row'>
                    <div className='section_title'>
                        <p className='section_tag'>ABOUT US</p>
                        <h2 className='section_heding'>Amazing Business Solution <br /> Whatever Your Needs</h2>
                        <p className='section_descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna.</p>
                    </div>

                    <div className='col-md-6 gy-5 common_L_items'>
                        <div className='common_L_content'>
                            <p className='section_tag'> {props.section_tag} </p>
                            <h2> {props.heading} </h2>
                            <p className='heading_description'> {props.description} </p>
                            <p className='point'> {props.frist_point} </p>
                            <p className='heading_description'> {props.frist_point_description} </p>
                            <p className='point'> {props.second_point} </p>
                            <p className='heading_description'> {props.second_point_description} </p>
                            <p className='point'> {props.frist_point} </p>
                            <p className='heading_description'> {props.frist_point_description} </p>
                        </div>
                    </div>

                    <div className='col-md-6 common_L_img'>
                        <img src={props.img} className='img-fluid' alt='img' />
                    </div>
                </div>
            </div>
    </>
    );
};

export default Common_L_component;