import React from 'react';

export default function AuthInput({
    type,
    placeholder,
    name,
    value,
    onChange,
}: {
    type: 'text' | 'email' | 'password';
    placeholder: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input
            className="w-full h-full border border-[#c8c8c8] px-[14px] py-[12px] rounded-full text-[14px] text-black font-semibold outline-none placeholder:text-[14px] placeholder:text-[#C8C8C8] placeholder:font-semibold"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}
