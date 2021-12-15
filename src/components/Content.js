import React from 'react';
import { ReactComponent as Hero2 } from '../images/pleasework.svg';
import Hero1 from './Hero1';

const Content = () => {
    return (
        <div>
            <div className="overflow-x-hidden bg-black sm:h-full h-96 flex flex-col justify-center items-center">
                <Hero1></Hero1>
            </div>
            <div className="overflow-x-hidden bg-black sm:h-full h-96 flex flex-col justify-center items-center">
                <Hero2></Hero2>
            </div>
        </div>
    );
};

export default Content;