import React from 'react';

type ManualButtonProps = {
    text: string;
    icon: React.ReactElement;
    onClick: () => void;
};

export default function ManualButton({ text, icon, onClick }: ManualButtonProps) {
    return (
        <div
            className="flex gap-[9px] items-center justify-center px-[32px] py-[14px] bg-[#D9D9D9] rounded-full cursor-pointer"
            onClick={onClick}
        >
            {icon}
            <span className='text-[#5D5D5D]'>{text}</span>
        </div>
    );
}
