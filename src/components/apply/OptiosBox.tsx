import React from 'react';

type OptiosBoxProps = {
    title: string;
    desc: string;
    imgSrc: string;
    isSelected: boolean;
};

export default function OptiosBox({title, desc, imgSrc, isSelected}: OptiosBoxProps) {
    return (
        <div className={`w-full h-1/4 px-[30px] py-[19px] flex rounded-[16px] gap-[24px] shadow-lg cursor-pointer ${isSelected ? 'border-[3px] border-[#536CF4] bg-[#B7C9E7]': 'bg-white'}`}>
            <img src={imgSrc} alt="OptionBox Image" className='w-[45px]' />
            <div className='w-full flex flex-col items-start justify-center gap-2'>
                <p className='text-black text-[18px] font-semibold'>{title}</p>
                <p className='text-[#5sd]'>{desc}</p>
            </div>
        </div>
    );
}

