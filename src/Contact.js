import React from 'react';
import ContactFrom from './ContactForm';
import ContactInfo from './ContactInfo';
import PageBanner from './PageBanner';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
        <PageBanner 
        heading='Contact Us'
        img='./img/contact_us.png'/>

        <ContactInfo /> 
        <ContactFrom />
        <Footer />
        </>

    );
};

export default Contact;