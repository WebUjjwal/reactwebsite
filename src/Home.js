import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import ProjectWithusSection from './ProjectWithusSection';
import Services from './Service';
// import Counter from './Counter';

const Home = ( ) => {
    return (
        <>
            <Banner />
            <Featured />
            <Services />
            {/* <Counter /> */}
            <ProjectWithusSection />
        </>
    );
};

export default Home;