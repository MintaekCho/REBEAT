import React from 'react';
import { ReactComponent as Active_Location } from '@/assets/icons/ic_active_location.svg';
import { ReactComponent as Check } from '@/assets/icons/ic_check.svg';
import { ReactComponent as Mini_Location } from '@/assets/icons/ic_mini_location.svg';
import { ReactComponent as History } from '@/assets/icons/ic_history.svg';
import { ReactComponent as Focus } from '@/assets/icons/ic_focus.svg';
import { ReactComponent as Right_Arrow } from '@/assets/icons/ic_right_arrow.svg';

export default function LocationModal({handleInitialTrending}: {handleInitialTrending: () => void}) {
    return (
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="w-full min-w-[500px] max-w-[567px] min-h-[300px] max-h-[420px] flex flex-col gap-10 fixed left-[23px] bottom-[23px] px-[24px] py-[22px] rounded-[23px] border border-white">
            <div className="flex gap-[10px]">
                <Active_Location />
                <h2 className="text-[31px] text-[#5D5D5D] font-bold">Trending1</h2>
            </div>
            <div className="flex flex-col gap-[10px] relative left-4">
                <div className="flex items-start gap-[16px]">
                    <Mini_Location />
                    <div className="flex flex-col gap-[4px] items-start">
                        <p>22, Supsongmaeul-ro</p>
                        <p>Ilsandong-gu</p>
                        <p>Goyang-si</p>
                        <p>Gyeonggi-do</p>
                    </div>
                </div>
                <div className="flex items-start gap-[16px]">
                    <History />
                    <div className="flex flex-col gap-[8px] items-start">
                        <p>Last used : 2 month ago</p>
                    </div>
                </div>
                <div className="flex items-start gap-[16px]">
                    <Focus />
                    <div className="flex flex-col gap-[8px] items-start">
                        <p>200m around you</p>
                    </div>
                </div>
            </div>
            <button className="w-[210px] px-[24px] py-[16px] bg-black flex items-center justify-center gap-[6px] text-white text-[22px] rounded-b-[16px] rounded-tr-[16px] self-end" onClick={handleInitialTrending}>
                <p>Show Details</p>
                <Right_Arrow />
            </button>
            <div className='flex flex-col absolute top-[25px] right-[25px] gap-[1px] items-center'>
                <Check />
                <span className='text-[18px] text-[#5D5D5D] font-[400]'>Available</span>
            </div>
        </div>
    );
}
