import React from 'react';
import { ReactComponent as Hero2 } from '../images/pleasework.svg';
import Hero1 from './Hero1';

const Content = () => {
    return (
        <div className="overflow-x-hidden bg-black xl:h-full h-screen flex flex-col justify-center items-center">
            <Hero1></Hero1>
            <Hero2 className="m-auto"></Hero2>
        </div>
    );
};

export default Content;