import React from 'react';
import SearchHistoryBox from '../searchBar/SearchHistoryBox';

export default function SearchHistoryModal() {
    return (
        <div className="w-full h-auto max-h-[895px] border-t border-[#D9D9D9] rounded-b-[26px] shadow-lg bg-white flex flex-col overflow-y-auto absolute left-0 top-[92px]">
            {new Array(10).fill(0).map((_, i) => {
                return <SearchHistoryBox key={i} index={i}/>;
            })}
        </div>
    );
}
