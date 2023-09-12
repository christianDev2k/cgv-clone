import { combineReducers } from '@reduxjs/toolkit';
import { quanLyNguoiDungReducer } from './quanLyNguoiDungSlice';
import { quanLyPhimReducer } from './quanLyPhimSlice';

export const rootReducer = combineReducers({ quanLyNguoiDungReducer, quanLyPhimReducer });
