import React from 'react';

const ProjectWithus = (props) => {
    return (
        <>
            <section id ='project_with_us_bg'>
                <img src ={props.design_1}  className='design_1 img-fluid' alt='img' />
                <img src ={props.design_2} className='design_2 img-fluid' alt='img' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 project_with_img'>
                            <img src={props.img} className='img-fluid' alt='img' />
                        </div>

                        <div className='col-md-6 project_with_us_content'>
                            <h3> {props.heading} </h3>
                            <p> {props.para} </p>
                            <button className="bann_btn" type="submit">Get Start</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectWithus;