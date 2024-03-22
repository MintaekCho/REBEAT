import React from 'react';
import {ReactComponent as KoreaIcon} from '@/assets/icons/ic_korea.svg';
import {ReactComponent as UnitedIcon} from '@/assets/icons/ic_united.svg';
import {ReactComponent as JapanIcon} from '@/assets/icons/ic_japan.svg';
import {ReactComponent as KingdomIcon} from '@/assets/icons/ic_kingdom.svg';
import {ReactComponent as NorthKoreaIcon} from '@/assets/icons/ic_northKorea.svg';
import {ReactComponent as TooltipArrow} from '@/assets/icons/ic_tooltipArrow.svg';
import BarChart from './chart/BarChart';

export default function CPRRanking() {
    return (
        <div className='w-full h-full bg-inherit pb-[65px] flex items-center relative'>
            <div className='w-[8%] h-full flex flex-col px-[25px] relative'>
                <span className='absolute bottom-[100%] translate-y-[100%]'>100</span>
                <span className='absolute bottom-[75%] translate-y-1/2'>75</span>
                <span className='absolute bottom-[50%] translate-y-1/2'>50</span>
                <span className='absolute bottom-[25%] translate-y-1/2'>25</span>
                <span className='absolute bottom-0'>0</span>
            </div>
            <div className='w-[92%] h-full flex items-end gap-[20px] pr-[12%] relative'>
            <div style={{bottom: '50%'}} className={`w-[100%] h-[1px] absolute -left-8 border-t border-dashed border-black`}>
                <div className='w-[80px] h-[33px] grid place-items-center bg-black rounded-md absolute right-0 top-0 -translate-y-1/2'>
                    <span className='text-white text-xl'>{'50%'}</span>
                    <TooltipArrow className='absolute -left-3' />
                </div>
            </div>
                <BarChart color='#93EBB2' value={100} icon={<KoreaIcon />} />
                <BarChart color='#FBD869' value={52} icon={<UnitedIcon />} />
                <BarChart color='#E5A462' value={90} icon={<JapanIcon />} />
                <BarChart color='#93EB' value={87} icon={<KingdomIcon />} />
                <BarChart color='#FF5858' value={50} icon={<NorthKoreaIcon />} />
                <BarChart color='#FBD869' value={92} />
                <BarChart color='#93EBB2' value={66} />
                <BarChart color='#FF5858' value={77} />
                <BarChart color='#E5A462' value={11} />
            </div>
        </div>
    );
}

