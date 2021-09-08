import React from 'react';
import { NavLink } from 'react-router-dom';

const GivenCard = (props) => {
    return (
        <>
            <div className='col-md-4 gy-4 text-center'>
                <div className='given_card'>
                    <img src = {props.img} className='img-fluid' alt='img' />
                    <h4> {props.heading} </h4>
                    <p> {props.para} </p>
                    <NavLink exact to='/' >View Details</NavLink>
                </div>
            </div>
        </>
    );
};

export default GivenCard;

