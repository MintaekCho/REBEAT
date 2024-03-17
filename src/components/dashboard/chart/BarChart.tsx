import React from 'react';

type BarChartProps = {
    value: number;
    color: string;
    icon?: React.ReactNode;
};

export default function BarChart({ value, color, icon }: BarChartProps) {
    return (
        <div
            style={{ height: `${value}%`, backgroundColor: color }}
            className="w-[66px] rounded-full relative duration-1000 ease-in-out"
        >
            {icon && <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-10">{icon}</div>}
            <div
                className={`w-[52px] h-[52px] grid place-items-center absolute ${
                    value < 21 ? '-top-14' : 'top-1'
                } bg-white rounded-full left-1/2 -translate-x-1/2`}
            >
                <span className="text-2xl">{value}</span>
            </div>
        </div>
    );
}
