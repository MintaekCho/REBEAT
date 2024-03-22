import React, { useEffect, useRef, useState } from 'react';
import { GoogleMapStyle } from './GoogleMapStyle';

declare global {
    interface Window {
      google: any;
    }
  }

export default function GoogleMap() {
    const [map, setMap] = useState(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const newMap = new window.google.maps.Map(ref.current, {
            center : { lat: 37.569227, lng: 126.9777256},
            zoom : 16,
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}],
            styles: GoogleMapStyle 
        });     
        
        setMap(newMap);
    },[])

    return (
        <div ref={ref} id="map" style={{width:"100%", height: "100%"}}></div>
    )
}
