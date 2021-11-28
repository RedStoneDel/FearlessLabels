import React from 'react';
import { ReactComponent as Hero2 } from '../images/pleasework.svg';
import Hero1 from './Hero1';

const Content = () => {
    return (
        <>
            <div className="overflow-x-hidden bg-black h-screen flex flex-col justify-center items-center">
                <Hero1></Hero1>
            </div>
            <div className="overflow-x-hidden bg-black h-screen flex flex-col justify-center items-center">
                <Hero2 className="h-full"></Hero2>
            </div>
        </>
    );
};

export default Content;