import React from 'react';
import GivenType from './GivenType';
import ProjectWithusSection from './ProjectWithusSection';
import Footer from './Footer';
import PageBanner from './PageBanner';

const Given = () => {
    return (
        <>
        <PageBanner 
        heading='What We Given '/>
         <GivenType />
         <ProjectWithusSection />
         <Footer />
        </>
    );
};

export default Given;