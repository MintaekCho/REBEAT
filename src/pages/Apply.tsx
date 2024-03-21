import OptionContainer from '@/components/apply/OptionContainer';
import SelectBox from '@/components/apply/SelectBox';
import { ReactComponent as ReturnIcon } from '@/assets/icons/ic_return.svg';
import { ReactComponent as LocationIcon } from '@/assets/icons/ic_active_location.svg';
import { ReactComponent as TrendIcon } from '@/assets/icons/ic_trend.svg';

export default function Apply() {
    return (
        <div className="w-full h-full bg-[#F6F6F6] relative">
            {/* <div className="w-[30%] h-[80%] min-h-[880px] flex flex-col items-center absolute right-[10%] bottom-0 bg-white rounded-t-[45px] px-[40px]">
                <OptionContainer />
            </div>
            <div className="w-[60%] absolute bottom-[70px] flex items-center gap-[14px] left-[20%]">
                <SelectBox />
                <SelectBox />
                <SelectBox />
                <SelectBox />
                <SelectBox />
            </div> */}
            <div className="w-full h-full flex-col gap-5 px-[84px] pt-[146px]">
                <div className="w-full h-1/3 relative">
                    <div className="absolute left-0 top-0 flex gap-3 items-center">
                        <ReturnIcon />
                        <LocationIcon />
                        <p className="text-black text-4xl font-[500]">Seoul Station</p>
                    </div>
                    <div className='w-[447px] flex items-center absolute top-0 left-1/2 -translate-x-1/2'>
                        <div className='border border-[#D4D5DA] font-semibold rounded-l-xl bg-inherit px-[42px] py-[16px]'>
                            <p>Timeline</p>
                        </div>
                        <div className='flex-1 border border-[#D4D5DA] font-semibold rounded-r-xl bg-[#F9FAFC] px-[24px] py-[16px]'>
                            <p>02.11.2024</p>
                        </div>
                    </div>
                    <div className='w-[485px] h-[280px] absolute top-0 right-0 p-5 border border-[#D4D5DA] rounded-xl bg-[#F9FAFC]'>
                        <span className='absolute left-5 top-5 font-semibold text-xl'>CPR Status</span>
                        <div className='absolute right-5 bottom-5 flex flex-col items-end text-xl'>
                            <p>This is the average</p>
                            <p>value of each value</p>
                            <p>during CPR.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-2/3 rounded-t-2xl border'>
                    <div className='w-full h-[10%] px-[47px] py-[16px] flex gap-3 bg-[#C44F3D] rounded-[inherit]'>
                        <TrendIcon />
                        <span className='text-white'>Accuracy Trends</span>
                    </div>
                    <div className='w-full h-[80%] bg-[#E56652] flex'>
                        <div className='w-[12%] h-full relative'>
                            <span className='absolute top-5 left-1/2 -translate-x-1/2 text-white text-xl font-semibold'>Final Score</span>
                            <span className='absolute bottom-[35px] left-1/2 -translate-x-1/2 text-white text-7xl font-semibold'>87</span>
                        </div>
                    </div>
                    <div className='w-full h-[10%] bg-[#4C4645] relative'>
                        <span className='absolute top-1 right-2 text-[#D4D6DC] text-[14px]'>Accuracy trend graph displays feedback message</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
