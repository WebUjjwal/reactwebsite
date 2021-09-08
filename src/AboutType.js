import React from 'react';

const AboutType = (props) => {
    return (
        <>
            <div className='about_type_box'>
                <h1> {props.heading} </h1>
                <p> {props.para} </p>
                <li><i class="bi bi-check-square"></i> {props.point1} </li>
                <li><i class="bi bi-check-square"></i> {props.point2} </li>
                <li><i class="bi bi-check-square"></i> {props.point3} </li>
                <li><i class="bi bi-check-square"></i> {props.point4} </li>
            </div>
        </>
    );
};

export default AboutType;