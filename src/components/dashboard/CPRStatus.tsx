import React from 'react';
import RadialBarChart from './chart/RadialBarChart';
import StatusLegend from './StatusLegend';

export default function CPRStatus() {
    const data = [
        {
            id: 'Supermarket',
            data: [
                {
                    x: 'Score',
                    y: 83,
                },
            ],
        },
        {
            id: 'Combini',
            data: [
                {
                    x: 'Depth',
                    y: 93,
                },
            ],
        },
        {
            id: 'Online',
            data: [
                {
                    x: 'Pressure',
                    y: 80,
                },
            ],
        },
    ];
    return (
        <div className="w-full h-full relative">
            <RadialBarChart data={data} />
            <div className='flex flex-col gap-2 absolute right-0 bottom-[5%]'>
                <StatusLegend text="Pressure" color="#767FE8" value="1.3" isPositive={true} />
                <StatusLegend text="Depth" color="#FBD869" value="2.5" isPositive={false} />
                <StatusLegend text="Score" color="#93EBB2" value="1.2" isPositive={true} />
            </div>
        </div>
    );
}
