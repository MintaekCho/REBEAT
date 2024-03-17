import React, { useState } from 'react';
import AuthInput from '../common/AuthInput';
import { ReactComponent as User } from '@/assets/icons/ic_user.svg';
import { ReactComponent as Look } from '@/assets/icons/ic_look.svg';
import { ReactComponent as Email } from '@/assets/icons/ic_email.svg';
import FormLogo  from '@/assets/logo/formLogo.png';

export default function SignUpForm() {
    const [signUpForm, setSignUpForm] = useState({
        email: '',
        userName: '',
        password: '',
    });

    const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');

    const handleSignUpForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUpForm({
            ...signUpForm,
            [name]: value,
        });
    };

    const handlePasswordType = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    const handleSubmit = () => {
        console.log(signUpForm);
    };

    return (
        <div className="w-full flex flex-col items-center gap-[26px]">
            <div className="w-full flex flex-col items-center gap-4">
                <div className='w-[200px] mb-5'>
                    <img src={FormLogo} alt='form 로고'  />
                </div>
                <div className="w-full h-[45px] relative">
                    <AuthInput
                        type="text"
                        placeholder="Your Email"
                        name={'email'}
                        value={signUpForm.email}
                        onChange={handleSignUpForm}
                    />
                    <Email className="absolute top-1/2 -translate-y-1/2 right-[18px]" />
                </div>
                <div className="w-full h-[45px] relative">
                    <AuthInput
                        type="text"
                        placeholder="Username"
                        name={'userName'}
                        value={signUpForm.userName}
                        onChange={handleSignUpForm}
                    />
                    <User className="absolute top-1/2 -translate-y-1/2 right-4" />
                </div>
                <div className="w-full h-[45px] relative">
                    <AuthInput
                        type={passwordType}
                        placeholder="Password"
                        name={'password'}
                        value={signUpForm.password}
                        onChange={handleSignUpForm}
                    />
                    <Look
                        className="absolute top-1/2 -translate-y-1/2 right-4"
                        onClick={handlePasswordType}
                    />
                </div>
            </div>
            <button
                className="w-full py-[9px] rounded-full bg-[#536cf4] text-[20px] text-white font-semibold mt-5 cursor-pointer"
                onClick={handleSubmit}
            >
                Sign Up
            </button>
        </div>
    );
}
