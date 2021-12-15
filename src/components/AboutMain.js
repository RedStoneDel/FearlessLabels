import React from 'react';
import { ReactComponent as AboutContent } from '../images/AboutPage.svg';

const AboutMain = () => {
    return (
        <div className="overflow-x-hidden bg-secondary xl:h-full h-screen flex flex-col justify-center items-center">
            <AboutContent></AboutContent>
        </div>
    );
};

export default AboutMain;