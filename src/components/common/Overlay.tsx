import React from 'react';

export default function Overlay({children}: {children: React.ReactNode}) {
    return (
        <div style={{backgroundColor: 'rgba(78, 78, 78, 0.4)'}} className='fixed w-screen h-screen z-[100] grid place-items-center'>
            {children}
        </div>
    );
}

