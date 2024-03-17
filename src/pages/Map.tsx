import GoogleMap from '@/components/map/GoogleMap';
import GoogleMapProvider from '@/components/map/GoogleMapProvider';
import SearchBar from '@/components/searchBar/SearchBar';
import React from 'react';

export default function Map() {
    return (
        <div className='w-full h-full relative'>
            <GoogleMapProvider>
                <GoogleMap />
            </GoogleMapProvider>
            <SearchBar />
        </div>
    );
}

