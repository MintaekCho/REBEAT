import OptionContainer from "@/components/apply/OptionContainer";
import SelectBox from "@/components/apply/SelectBox";


export default function Apply() {
    

    return (
        <div className="w-full h-full bg-[#F6F6F6] relative">
            <div className="w-[30%] h-[80%] flex flex-col items-center absolute right-[10%] bottom-0 bg-white rounded-t-[45px] px-[40px]">
                <OptionContainer />
            </div>
            <div className="w-[60%] absolute bottom-[70px] flex items-center gap-[14px] left-[20%]">
                <SelectBox />
                <SelectBox />
                <SelectBox />
                <SelectBox />
                <SelectBox />
            </div>
        </div>
    );
}
