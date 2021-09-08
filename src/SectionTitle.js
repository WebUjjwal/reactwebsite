import React from 'react';

const Section_title = (props) => {
    return (
        <>
            <div className='section_title'>
                    <p className='section_tag'> {props.section_tag} </p>
                    <h2 className='section_heding'> {props.section_heding} </h2>
                    <p className='section_descrip'> {props.section_descrip} </p>
                </div>
        </>
    );
};

export default Section_title;