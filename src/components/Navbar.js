import React from 'react';
import { Link } from 'react-router-dom';
import ImageOne from '../images/fearless-logo.jpg'; 

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-20 bg-white text-black relative font-sans ">
            <Link to="/">
                <img src={ImageOne} alt="fearless_labels_logo" className="h-16 ml-8"/>
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>
            </div>
            <div className="mr-8 md:block hidden text-xs">
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
        </nav> 
    );
};

export default Navbar;