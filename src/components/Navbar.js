import React from 'react';
import { Link } from 'react-router-dom';
import ImageOne from '../images/fearless-logo.jpg'; 

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-20 bg-white text-black relative font-sans">
            <Link to="/">
                <img src={ImageOne} alt="fearless_labels_logo" className="h-16 ml-8"/>
            </Link>
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