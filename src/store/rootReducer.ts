import { combineReducers } from '@reduxjs/toolkit';
import { quanLyNguoiDungReducer } from './quanLyNguoiDungSlice';

export const rootReducer = combineReducers({ quanLyNguoiDungReducer });
