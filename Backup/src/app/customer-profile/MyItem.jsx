"use client"

import React, { useState, useEffect } from 'react';
import ProfileMyItems from '@/Components/ProfileMyItems';
import Slider1 from '@/Components/Slider1';


function MyItem(myItemCards) {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 600);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {isLargeScreen ? (
                <ProfileMyItems headingBlack="My Items" cards={[myItemCards]} />
            ) : (
                <Slider1 headingBlack="My Items" cards={[myItemCards]} />
            )}
        </div>
    );
}

export default MyItem;
