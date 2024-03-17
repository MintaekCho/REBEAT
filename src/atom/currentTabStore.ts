import { atom } from "recoil";

export const currentTabState = atom<'Map' | 'Dashboard' | 'Apply'>({
    key: 'currentTabState',
    default: 'Map'
})