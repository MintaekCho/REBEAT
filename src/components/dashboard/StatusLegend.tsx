import React from 'react';

type StatusLegendProps = {
    text: string;
    value: string;
    color: string;
    isPositive: boolean;
};

export default function StatusLegend({ text, value, color, isPositive }: StatusLegendProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <span style={{backgroundColor: color}} className="w-[15px] h-[15px] rounded-full"></span>
                    <span className="text-xl font-semibold">{text}</span>
                </div>
                <div
                    className={`px-[17px] py-[3px] ${
                        isPositive ? 'text-[#3c8336] bg-[#E2EFE5]' : 'text-[#B9372E] bg-[#FBEDEC]'
                    }  rounded-[4px] ml-4`}
                >
                    <span>
                        {isPositive ? '+' : '-'}
                        {value}%
                    </span>
                </div>
            </div>
        </div>
    );
}
