import React from 'react';
import { ReactComponent as ArtistsContent } from '../images/ArtistsPage.svg';

const ArtistsMain = () => {
    return (
        <div className="overflow-x-hidden bg-black xl:h-full h-screen flex flex-col justify-center items-center">
            <ArtistsContent></ArtistsContent>
        </div>
    );
};

export default ArtistsMain;