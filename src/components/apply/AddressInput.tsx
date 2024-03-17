import React from 'react';

type AddressInputProps = {
    name: string;
    value: string;
    placeHolder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AddressInput({ name, value, placeHolder, onChange }: AddressInputProps) {
    return (
        <input
        className='w-full h-[40px] border border-black px-[17px] py-[11px] rounded-md outline-none'
            type="text"
            name={name}
            value={value}
            placeholder={placeHolder}
            onChange={onChange}
        />
    );
}
