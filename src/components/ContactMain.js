import React from 'react';
import { ReactComponent as ContactContent } from '../images/ContactPage.svg';

const ContactMain = () => {
    return (
        <div className="overflow-x-hidden bg-gray-200 xl:h-full h-screen flex flex-col justify-center items-center">
            <ContactContent></ContactContent>
        </div>
    );
};

export default ContactMain;