import { combineReducers } from '@reduxjs/toolkit';
import { quanLyNguoiDungReducer } from './quanLyNguoiDungSlice';
import { quanLyPhimReducer } from './quanLyPhimSlice';
import { quanLyRapReducer } from './quanLyRapSlice';
import { quanLyDatVeReducer } from './quanLyDatVeSlice';

export const rootReducer = combineReducers({
    quanLyNguoiDungReducer,
    quanLyPhimReducer,
    quanLyRapReducer,
    quanLyDatVeReducer,
});
