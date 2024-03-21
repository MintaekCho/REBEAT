import React from 'react';
import { ReactComponent as Active_Location } from '@/assets/icons/ic_active_location.svg';
import { ReactComponent as Default_Location } from '@/assets/icons/ic_location.svg';
import { ReactComponent as UP_ARROW } from '@/assets/icons/ic_upArrow.svg';
import { ReactComponent as DOWN_ARROW } from '@/assets/icons/ic_downArrow.svg';
import { ReactComponent as LINE_ARROW } from '@/assets/icons/ic_line_arrow.svg';
import GoogleMapProvider from '@/components/map/GoogleMapProvider';
import GoogleMap from '@/components/map/GoogleMap';

export default function CPRInfo() {
    return (
        <div className="w-[35%] h-full flex flex-col gap-[26px]">
            <div className="w-full h-[25%] flex items-center gap-9">
                <div className="w-[55%] h-full flex">
                    <div className="w-full rounded-2xl bg-[#3A3A3A] px-[25px] py-[30px] flex flex-col relative">
                        <div className="flex flex-col text-[22px] text-white font-[500]">
                            <p>REBEAT</p>
                            <div className="flex items-center gap-1">
                                <p>Usage</p>
                                <UP_ARROW />
                            </div>
                        </div>
                        <div className="flex items-end gap-1">
                            <span className="text-[40px] font-[700] text-white">27</span>
                            <span className="text-[40px] font-[400] text-[#AEAEAE]">times</span>
                        </div>
                        <LINE_ARROW className="absolute bottom-2 right-2" />
                        <div className="p-1 bg-[#5489F7] rounded-full absolute top-[25px] right-4 text-white">
                            Increase 46%
                        </div>
                    </div>
                </div>
                <div className="w-[45%] h-full flex">
                    <div className="w-full rounded-2xl bg-[#3A3A3A] px-[25px] py-[30px]">
                        <div className="flex flex-col text-[22px] text-white font-[500]">
                            <p>REBEAT</p>
                            <div className="flex items-center gap-1">
                                <p>CPR Time</p>
                                <DOWN_ARROW />
                            </div>
                        </div>
                        <div className="flex items-end gap-1">
                            <span className="text-[40px] font-[700] text-white">3min 12sec</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[75%] flex flex-col p-[14px] gap-[14px] bg-white rounded-2xl">
                <div className="w-full">
                    <p className="text-[22px] font-[500] ml-[11px] mt-[6px]">Most CPR Done</p>
                </div>
                <div className="w-full h-[60%] rounded-2xl overflow-hidden">
                    <GoogleMapProvider>
                        <GoogleMap />
                    </GoogleMapProvider>
                </div>
                <div className="w-full h-[40%] bg-white rounded-2xl flex flex-col gap-[25px]">
                    <div className="w-full h-1/2 px-[21px] bg-white shadow-lg rounded-[5px] flex items-center justify-between">
                        <div className="ml-[6px] flex items-center gap-4">
                            <Active_Location />
                            <div className="flex flex-col items-start">
                                <p>Namyeong Station</p>
                                <p>25, Hanangdae-ro 77-gil, Yongsan-gu, Seoul</p>
                            </div>
                        </div>
                        <div className="w-[30%] h-1/2 rounded-lg grid place-items-center bg-[#E2EFE5]">
                            <p className="text-[12px] font-bold text-[#3C8336]">
                                25 CPRs Done by REBEAT
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-1/2 px-[21px] bg-white shadow-lg rounded-[5px] flex items-center justify-between">
                        <div className="ml-[6px] flex items-center gap-4">
                            <Default_Location />
                            <div className="flex flex-col items-start">
                                <p>Hyochang Park</p>
                                <p>Hyochang-dong, Yongsan-gu, Seoul</p>
                            </div>
                        </div>
                        <div className="w-[30%] h-1/2 rounded-lg grid place-items-center bg-[#E2EFE5]">
                            <p className="text-[12px] font-bold text-[#3C8336]">
                                15 CPRs Done by REBEAT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
