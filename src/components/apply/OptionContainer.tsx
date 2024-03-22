import React, { useState } from 'react';
import ITEM1 from '@/assets/images/item1.png';
import ITEM2 from '@/assets/images/item2.png';
import ITEM3 from '@/assets/images/item3.png';
import ITEM4 from '@/assets/images/item4.png';
import ManualButton from './ManualButton';
import OptiosBox from '@/components/apply/OptiosBox';
import { ReactComponent as ManualICon } from '@/assets/icons/ic_manual.svg';
import AddressInput from '@/components/apply/AddressInput';

export default function OptionContainer({handleApplySubmit}: {handleApplySubmit: () => void}) {
    const OPTION_ITEM_LIST = [
        {
            title: 'REBEAT',
            desc: 'A device that will assist your CPR.',
            imgSrc: ITEM1,
        },
        {
            title: 'Charging Cable',
            desc: 'Simple charging dock for individual users.',
            imgSrc: ITEM2,
        },
        {
            title: 'Charging Station',
            desc: 'Charging Station for public plaeces.',
            imgSrc: ITEM3,
        },
        {
            title: 'Additional Gel Pad',
            desc: 'Additional Gel Pad for changing.',
            imgSrc: ITEM4,
        },
    ];

    const [addressForm, setAddressForm] = useState({
        address: '',
        detailAddress: '',
    });

    const handleAddressForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddressForm({
            ...addressForm,
            [name]: value,
        });
    };
    return (
        <div className="w-full h-full flex flex-col gap-[16px] mt-[25px]">
            <h2 className="text-[24px] font-bold text-[#2C2C2C]">Options</h2>
            <div className="w-full h-2/5 flex flex-col gap-[11px] px-[16px]">
                {OPTION_ITEM_LIST.map((item, i) => {
                    return (
                        <OptiosBox
                            key={i}
                            title={item.title}
                            desc={item.desc}
                            imgSrc={item.imgSrc}
                            isSelected={true}
                        />
                    );
                })}
            </div>
            <h2 className="text-[24px] font-bold text-[#2C2C2C] mt-[25px]">Address</h2>
            <div className="w-full h-auto flex flex-col gap-[12px] px-[16px]">
                <AddressInput
                    name="address"
                    value={addressForm.address}
                    placeHolder="White your address..."
                    onChange={handleAddressForm}
                />
                <AddressInput
                    name="detailAddress"
                    value={addressForm.detailAddress}
                    placeHolder="White your detailed address..."
                    onChange={handleAddressForm}
                />
            </div>
            <h2 className="text-[24px] font-bold text-[#2C2C2C]">Support</h2>
            <div className="w-full flex items-center gap-5">
                <ManualButton
                    text="Detail specifications"
                    icon={<ManualICon />}
                    onClick={() => {}}
                />
                <ManualButton text="User Manual" icon={<ManualICon />} onClick={() => {}} />
            </div>
            <button
                className="w-[25%] h-[40px] z-20 grid place-items-center bg-[#536CF4] relative left-1/2 -translate-x-1/2 rounded-[9px] text-white cursor-pointer"
                onClick={handleApplySubmit}
            >
                Summit
            </button>
        </div>
    );
}
