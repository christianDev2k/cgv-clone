import { createSlice } from '@reduxjs/toolkit';
import { DanhSachGheType, ListPhongVeType } from 'types';
import { LayDanhSachPhongVeThunk } from '.';

type initialStateProps = {
    danhSachPhongVe: ListPhongVeType;
    isFetchingPhongVe: boolean;
    bookedList: DanhSachGheType[] | [];
};

const initialState: initialStateProps = {
    danhSachPhongVe: undefined,
    bookedList: [],
    isFetchingPhongVe: false,
};

const quanLyDatVeSlice = createSlice({
    name: 'quanLyDatVeSlice',
    initialState,
    reducers: {
        handleBooked: (state, { payload }) => {
            state.bookedList = payload;
        },
    },
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
