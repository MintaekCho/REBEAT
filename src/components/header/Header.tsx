import React, { useRef, useState } from 'react';
import { ReactComponent as Logo } from '@/assets/logo/logo.svg';
import { ReactComponent as Map } from '@/assets/icons/ic_map.svg';
import { ReactComponent as Dashboard } from '@/assets/icons/ic_dashboard.svg';
import { ReactComponent as Apply } from '@/assets/icons/ic_apply.svg';
import Overlay from '../common/Overlay';
import CommonModal from '../modal/CommonModal';
import AuthForm from '../auth/AuthForm';
import useOutsideClickModalClose from '@/hooks/useOutsideClickModalClose';
import SignUpForm from '../auth/SignUpForm';
import { useSetRecoilState } from 'recoil';
import { currentTabState } from '@/atom/currentTabStore';

export default function Header() {
    const HEADER_CATEGORY = [
        {
            id: 1,
            name: 'Map',
            icon: <Map />,
        },
        {
            id: 2,
            name: 'Dashboard',
            icon: <Dashboard />,
        },
        {
            id: 3,
            name: 'Apply',
            icon: <Apply />,
        },
    ];

    const [selectCategory, setSelectCategory] = useState(HEADER_CATEGORY[0]);
    const setCurrentTab = useSetRecoilState(currentTabState);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const handleOpenLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleOpenSignUpModal = () => {
        setIsSignUpModalOpen(true);
    };

    const handleCloseSignUpModal = () => {
        setIsSignUpModalOpen(false);
    };

    const handleSetCurrentTab = (category: any) => {
        setSelectCategory(category);
        setCurrentTab(category.name);
    }



    return (
        <>
            <div className="w-[97%] h-auto fixed top-5 left-1/2 -translate-x-1/2 p-[19px] flex items-center justify-between bg-white rounded-full z-50">
                <div className="flex items-center gap-3">
                    <Logo />
                    <h1 className="text-[26px] font-semibold">REBEAT</h1>
                </div>
                <div className="flex bg-[#F6F5F8] rounded-full relative left-10">
                    {HEADER_CATEGORY.map((category, i) => {
                        const isSelected = selectCategory.id === category.id;
                        return (
                            <div
                                key={category.id}
                                className={`flex items-center rounded-full cursor-pointer ${
                                    i !== 0 ? 'ml-[-16px]' : ''
                                }`}
                                onClick={() => handleSetCurrentTab(category)}
                            >
                                <div
                                    className={`w-[163px] py-[14px] bg-inherit flex items-center justify-center gap-[10px] rounded-full`}
                                >
                                    {selectCategory.id === category.id && (
                                        <div className='z-30'>
                                            {category.icon}
                                        </div>
                                    )}
                                    <p
                                        className={`text-[18px] ${
                                            isSelected ? 'text-[#FBFBFB]' : 'text-[#77838A]'
                                        } font-normal z-30`}
                                    >
                                        {category.name}
                                    </p>
                                </div>
                                <div style={{width: `${100 / HEADER_CATEGORY.length}%`, left: `${(100 / HEADER_CATEGORY.length) * (selectCategory.id - 1)}%`}} className='h-full bg-[#0E1619] rounded-full absolute top-0 duration-500' />
                            </div>
                        );
                    })}
                </div>
                <div className="flex rounded-full">
                    <div
                        className="w-[196px] flex items-center justify-center rounded-full hover:bg-[#E3E3E3] py-[17px] cursor-pointer"
                        onClick={handleOpenLoginModal}
                    >
                        <p className="text-[18px] text-[#77838A] font-semibold">Login</p>
                    </div>
                    <div onClick={handleOpenSignUpModal} className="w-[196px] flex items-center justify-center rounded-full hover:bg-[#E3E3E3] py-[17px] ml-[-24px] cursor-pointer">
                        <p className="text-[18px] text-[#77838A] font-semibold">Signin</p>
                    </div>
                </div>
            </div>
            {isLoginModalOpen && (
                <Overlay>
                    <CommonModal isOpen={isLoginModalOpen} closeModal={handleCloseLoginModal}>
                        <AuthForm  />
                    </CommonModal>
                </Overlay>
            )}
            {isSignUpModalOpen && (
                <Overlay>
                    <CommonModal isOpen={isSignUpModalOpen} closeModal={handleCloseSignUpModal}>
                        <SignUpForm />
                    </CommonModal>
                </Overlay>
            )}
        </>
    );
}
