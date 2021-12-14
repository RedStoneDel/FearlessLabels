import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'fixed h-screen w-full top-0 bg-dropdown' : 'hidden'} onClick={toggle}>
            <div className="grid text-center items-center p-24 text-white"> 
                <Link to="/" className="p-7">
                    HOME
                </Link>
                <Link to="/about" className="p-7">
                    ABOUT
                </Link>
                <Link to="/artists" className="p-7">
                    ARTISTS
                </Link>
                <Link to="/contact" className="p-7">
                    CONTACT
                </Link>
            </div>
        </div>
    );
};
export default Dropdown;