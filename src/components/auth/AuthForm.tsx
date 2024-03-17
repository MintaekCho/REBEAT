import React, { useState } from 'react';
import { ReactComponent as Profile } from '@/assets/icons/ic_profile.svg';
import { ReactComponent as User } from '@/assets/icons/ic_user.svg';
import { ReactComponent as Look } from '@/assets/icons/ic_look.svg';
import AuthInput from '../common/AuthInput';

export default function AuthForm() {
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: '',
    });

    const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');

    const handleLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    };

    const handlePasswordType = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    const handleSubmit = () => {
        console.log(loginForm);
    };

    return (
        <div className="w-full flex flex-col items-center gap-[26px]" >
            <Profile />
            <div className="w-full flex flex-col gap-4">
                <div className="w-full h-[45px] relative">
                    <AuthInput
                        type="text"
                        placeholder="Username"
                        name={'userName'}
                        value={loginForm.userName}
                        onChange={handleLoginForm}
                    />
                    <User className="absolute top-1/2 -translate-y-1/2 right-4" />
                </div>
                <div className="w-full h-[45px] relative">
                    <AuthInput
                        type={passwordType}
                        placeholder="Password"
                        name={'password'}
                        value={loginForm.password}
                        onChange={handleLoginForm}
                    />
                    <Look
                        className="absolute top-1/2 -translate-y-1/2 right-4"
                        onClick={handlePasswordType}
                    />
                    <p className="text-[10px] font-semibold text-[#b4b4b4] absolute right-0 -bottom-5">
                        Forgot Password?
                    </p>
                </div>
            </div>
            <button
                className="w-full py-[9px] rounded-full bg-[#536cf4] text-[20px] text-white font-semibold mt-5 cursor-pointer"
                onClick={handleSubmit}
            >
                Login
            </button>
        </div>
    );
}
