import React from 'react';

const About_choosesection = (props) => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 about_choose_section'>
                        <div className='about_choose_section_content'>
                            <h3> {props.heading1} </h3>
                            <p> {props.para1} </p>
                            <h3> {props.heading2} </h3>
                            <p> {props.para2} </p>
                            <h3> {props.heading3} </h3>
                            <p> {props.para3} </p>
                        </div>
                    </div>

                        <div className='col-md-6 about_choose_section_img'>
                            <img src={props.img} className='img-fluid' alt='img' />
                        </div>
                </div>
            </div>
        </>
    );
};

export default About_choosesection;