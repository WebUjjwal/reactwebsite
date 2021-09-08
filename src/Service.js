import React from 'react';
import CommonLeftcomponent from './CommonLeftcomponent';
import CommonRightcomponent from './CommonRightcomponent';

const Services = () => {
    return (
        <>
            <CommonLeftcomponent 
            img='./img/digital_marketing.png'
            section_tag='DIGITAL MARKETING'
            heading='Creative solutions, creative results'
            description='We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.'
            frist_point='Core Development'
            frist_point_description='No fake products and services. The customer is king, their lives and needs are the inspiration' 
            second_point='Define Your Choices'
            second_point_description='No fake products and services. The customer is king, their lives and needs are the inspiration.'/>

            <CommonRightcomponent 
            img='./img/design_development.png'
            section_tag='DESIGN & DEVELOPMENT'
            heading='Solving problems, building brands'
            description='We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.'
            option_1='Recommender systems'
            option_2='Omnichannel analytics'
            option_3='Dedicated Developers'
            option_4='Demand prediction'
            option_5='Lead generation'
            option_6='24/7 Support'/>

            <CommonLeftcomponent 
            img='./img/social_media_marketing.png'
            section_tag='SOCIAL MEDIA MARKETING'
            heading='We are the next generation of the advertising world'
            description='We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.'
            frist_point='Core Development'
            frist_point_description='No fake products and services. The customer is king, their lives and needs are the inspiration' 
            second_point='Define Your Choices'
            second_point_description='No fake products and services. The customer is king, their lives and needs are the inspiration.'/>

            <CommonRightcomponent 
            img='./img/seo.png'
            section_tag='SEO CONSULTANCY'
            heading='We make smart, good-looking things'
            description='We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.'
            option_1='Recommender systems'
            option_2='Omnichannel analytics'
            option_3='Dedicated Developers'
            option_4='Demand prediction'
            option_5='Lead generation'
            option_6='24/7 Support'/>
        </>
    );
};

export default Services;