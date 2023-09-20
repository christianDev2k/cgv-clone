import { createSlice } from '@reduxjs/toolkit';
import { DanhSachGheType, ListPhongVeType } from 'types';
import { DatVeThunk, LayDanhSachPhongVeThunk } from '.';

type initialStateProps = {
    danhSachPhongVe: ListPhongVeType;
    bookedList: DanhSachGheType[] | [];
    bookingStatus: string;
    isFetchingPhongVe: boolean;
    isFetchingBooking: boolean;
};

const initialState: initialStateProps = {
    danhSachPhongVe: undefined,
    bookedList: [],
    isFetchingPhongVe: false,
    bookingStatus: undefined,
    isFetchingBooking: false,
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
            // Lấy danh sách phòng vé
            .addCase(LayDanhSachPhongVeThunk.pending, state => {
                state.isFetchingPhongVe = true;
            })
            .addCase(LayDanhSachPhongVeThunk.fulfilled, (state, { payload }) => {
                state.isFetchingPhongVe = false;
                state.danhSachPhongVe = payload;
            })
            .addCase(LayDanhSachPhongVeThunk.rejected, state => {
                state.isFetchingPhongVe = false;
            })

            // Đặt vé
            .addCase(DatVeThunk.pending, state => {
                state.isFetchingBooking = true;
            })
            .addCase(DatVeThunk.fulfilled, (state, { payload }) => {
                state.isFetchingBooking = false;
                state.bookingStatus = payload;
                state.bookedList = [];
            })
            .addCase(DatVeThunk.rejected, state => {
                state.isFetchingBooking = false;
            });
    },
});

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } = quanLyDatVeSlice;
