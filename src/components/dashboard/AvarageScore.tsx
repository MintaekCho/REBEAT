import React from 'react';
import PieChart from './chart/PieChart';

export default function AvarageScore() {
    const chartData = [
        {
            id: 'stylus',
            label: 'stylus',
            value: 45,
            color: 'hsl(259, 70%, 50%)',
        },
        {
            id: 'sass',
            label: 'sass',
            value: 25,
            color: 'hsl(70, 70%, 50%)',
        },
        {
            id: 'scala',
            label: 'scala',
            value: 15,
            color: 'hsl(340, 70%, 50%)',
        },
        {
            id: 'erlang',
            label: 'erlang',
            value: 15,
            color: 'hsl(94.02985074626866, 29.004329004328998%, 45.294117647058826%)',
        },
    ];
    return (
        <div className='w-full h-full relative'>
            <PieChart data={chartData} />
            <div className='absolute z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center'>
                <span className='text-[#030303] text-5xl font-semibold'>85</span>
                <div className='px-[17px] py-[3px] text-[#3c8336] bg-[#E2EFE5] rounded-[4px]'>
                    <span>+1.3%</span>
                </div>
            </div>
            <div className='absolute z-50 left-1/2 -translate-x-1/2 bottom-[40px] flex flex-col items-center'>
                <p className='font-semibold'>This score shows it’s good.</p>
                <p className='text-[#5D5D5D]'>Last Checked Feb 27.</p>
            </div>
        </div>
    );
}
