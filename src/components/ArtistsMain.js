import React from 'react';
import { ReactComponent as ArtistsContent } from '../images/ArtistsPage.svg';

const ArtistsMain = () => {
    return (
        <div className="overflow-x-hidden bg-black h-screen flex flex-col justify-center items-center">
            <ArtistsContent className="h-full"></ArtistsContent>
        </div>
    );
};

export default ArtistsMain;