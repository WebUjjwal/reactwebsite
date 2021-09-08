import React from 'react';

const FeaturedCard = (props) => {
    return(
        <>
            {/* <div className='col-md-4'> */}
                <div className='featured_box'>
                    <img src={props.img} alt='featured_img' />
                    <h2 className='fea_box_title'> {props.fea_box_title} </h2>
                    <p className='fea_box_descrip'> {props.fea_box_descrip} </p>
                </div>
            {/* </div> */}
        </>
    );
};

export default FeaturedCard;