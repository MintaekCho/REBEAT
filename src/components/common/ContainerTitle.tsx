import React from 'react';
import { ReactComponent as TOOLTIP } from '@/assets/icons/ic_tooltip.svg';

export default function ContainerTitle({title}: {title: string}) {
    return (
        <div className='flex items-center justify-between'>
            <h2 className='text-[22px] font-[500] text-[#020202]'>{title}</h2>
            <TOOLTIP />
        </div>
    );
}

