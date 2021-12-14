import React from 'react';
import { ReactComponent as ContactContent } from '../images/ContactPage.svg';

const ContactMain = () => {
    return (
        <div className="overflow-x-hidden bg-gray-200 h-screen flex flex-col justify-center items-center">
            <ContactContent className="h-full"></ContactContent>
        </div>
    );
};

export default ContactMain;