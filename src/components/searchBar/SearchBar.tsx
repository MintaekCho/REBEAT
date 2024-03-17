import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Search } from '@/assets/icons/ic_search.svg';
import SearchHistoryModal from '../modal/SearchHistoryModal';
import LocationModal from '../modal/LocationModal';

export default function SearchBar() {
    const searchBarRef = useRef<HTMLInputElement>(null);
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleTextChante = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        const handleFocusChange = () => {
            setIsFocused(document.activeElement === searchBarRef.current);
        };

        document.addEventListener('focus', handleFocusChange, true);
        document.addEventListener('blur', handleFocusChange, true);

        return () => {
            document.removeEventListener('focus', handleFocusChange, true);
            document.removeEventListener('blur', handleFocusChange, true);
        };
    }, []);

    return (
        <div className={`w-full min-w-[300px] max-w-[589px] flex items-center gap-5 px-[35px] py-[22px] ${isFocused ? 'rounded-t-[26px]' : 'rounded-[26px]'} bg-white shadow-lg absolute right-5 top-[160px] z-50`}>
            <Search />
            <input
                ref={searchBarRef}
                className="placeholder:text-[32px] placeholder:text-[#5D5D5D] placeholder:font-thin text-[32px] text-[#5D5D5D] outline-none"
                type="text"
                placeholder="search for location"
                onChange={handleTextChante}
                value={searchText}
            />
            {isFocused && <SearchHistoryModal />}
            <LocationModal />
        </div>
    );
}
