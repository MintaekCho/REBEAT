import React from 'react';
import ContainerTitle from '@/components/common/ContainerTitle';
import CPRInfo from '@/components/dashboard/CPRInfo';
import CPRRanking from '@/components/dashboard/CPRRanking';
import AvarageScore from '@/components/dashboard/AvarageScore';
import CPRStatus from '@/components/dashboard/CPRStatus';


export default function Dashboard() {
    return (
        <div className="w-full h-full bg-[#F6F6F6]">
            <div className="w-full h-full pt-[171px] px-[42px] pb-[25px]">
                <div className="w-full h-full flex items-center justify-between gap-9">
                    <div className="w-[65%] h-full flex flex-col gap-9">
                        <div className="w-full h-[45%] flex items-center justify-between gap-[38px]">
                            <div className="w-1/2 h-full flex flex-col gap-[30px] bg-white rounded-[21px] px-6 py-[20px]">
                                <ContainerTitle title="Avarage Score" />
                                <AvarageScore />
                            </div>
                            <div className="w-1/2 h-full flex flex-col gap-[30px] bg-white rounded-[21px] px-6 py-[20px]">
                                <ContainerTitle title="CPR Status" />
                                <CPRStatus />
                            </div>
                        </div>
                        <div className="w-full h-[55%] flex flex-col gap-[30px] bg-white rounded-2xl px-6 py-[20px]">
                            <ContainerTitle title="Global CPR Ranking" />
                            <CPRRanking />
                        </div>
                    </div>
                    <CPRInfo />
                </div>
            </div>
        </div>
    );
}
