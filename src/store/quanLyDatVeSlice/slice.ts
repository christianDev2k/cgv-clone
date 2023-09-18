import { createSlice } from '@reduxjs/toolkit';
import { ListPhongVeType } from 'types';
import { LayDanhSachPhongVeThunk } from '.';

type initialStateProps = {
    danhSachPhongVe: ListPhongVeType;
    isFetchingPhongVe: boolean;
};

const initialState: initialStateProps = {
    danhSachPhongVe: undefined,
    isFetchingPhongVe: false,
};

const quanLyDatVeSlice = createSlice({
    name: 'quanLyDatVeSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(LayDanhSachPhongVeThunk.pending, state => {
                state.isFetchingPhongVe = true;
            })
            .addCase(LayDanhSachPhongVeThunk.fulfilled, (state, { payload }) => {
                state.isFetchingPhongVe = false;
                state.danhSachPhongVe = payload;
            })
            .addCase(LayDanhSachPhongVeThunk.rejected, state => {
                state.isFetchingPhongVe = false;
            });
    },
});

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } = quanLyDatVeSlice;
