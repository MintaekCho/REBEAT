import useOutsideClickModalClose from '@/hooks/useOutsideClickModalClose';
import React, { useRef } from 'react';

export default function CommonModal({
    children,
    isOpen,
    closeModal,
}: {
    children: React.ReactNode;
    isOpen: boolean;
    closeModal: () => void;
}) {

    const commonModalRef = useRef<HTMLDivElement>(null);

    useOutsideClickModalClose({
        ref: commonModalRef,
        isOpen: isOpen,
        closeModal: closeModal,
    });

    return (
        <div
            className="w-[522px] h-[625px] p-[120px] bg-white rounded-[23px] grid place-items-center"
            ref={commonModalRef}
        >
            {children}
        </div>
    );
}
