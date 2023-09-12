import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { useDispatch } from 'react-redux';
import { getUserByAccessTokenThunk } from './quanLyNguoiDungSlice';

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

store.dispatch(getUserByAccessTokenThunk());

type AppDispatch = (typeof store)['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<(typeof store)['getState']>;
