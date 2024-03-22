import React from 'react';
import { ReactComponent as Location } from '@/assets/icons/ic_location.svg';
import { ReactComponent as Active_Location } from '@/assets/icons/ic_active_location.svg';
import { useSetRecoilState } from 'recoil';
import { currentTrendingState } from '@/atom/cuttentTrending';

export default function SearchHistoryBox({index}: {index: number}) {
    const setCurrentTrending = useSetRecoilState(currentTrendingState)

    const handleCurrentTrending = () => {
        setCurrentTrending(true)
    }
    return (
        <div className='w-full flex items-center gap-[10px] px-[35px] py-[12px] cursor-pointer hover:bg-[#E3E3E3]' onClick={handleCurrentTrending}>
            {index === 0 ? <Active_Location /> : <Location />}
            <div className='flex flex-col gap-[10px]'>
                <p className='text-[32px] font-normal text-[#5D5D5D]'>Trending1</p>
                <p className='text-[22px] font-thin text-[#5D5D5D] relative left-[36px]'>I awf awff awfaw awfawf awf awffytjty.</p>
            </div>
        </div>
    );
}

