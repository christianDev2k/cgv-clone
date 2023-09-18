import { createSlice } from '@reduxjs/toolkit';
import { ThongTinCumRapType, ThongTinLichChieuType } from 'types';
import { LayThongTinCumRapThunk, LayThongTinLichChieuThunk } from './thunk';

type quanLyRapType = {
    listCinemas: ThongTinCumRapType[];
    listLichChieu: ThongTinLichChieuType[];
    isFetchingListCinemas?: boolean;
};

const initialState: quanLyRapType = {
    listCinemas: undefined,
    isFetchingListCinemas: false,
    listLichChieu: undefined,
};

const quanLyRapSlice = createSlice({
    name: 'quanLyRapSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // Cụm rạp
            .addCase(LayThongTinCumRapThunk.pending, state => {
                state.isFetchingListCinemas = true;
            })
            .addCase(LayThongTinCumRapThunk.fulfilled, (state, { payload }) => {
                state.isFetchingListCinemas = false;
                state.listCinemas = payload;
            })
            .addCase(LayThongTinCumRapThunk.rejected, state => {
                state.isFetchingListCinemas = false;
            })

            // Lịch chiếu
            .addCase(LayThongTinLichChieuThunk.fulfilled, (state, { payload }) => {
                state.listLichChieu = payload;
            });
    },
});

export const { reducer: quanLyRapReducer, actions: quanLyRapActions } = quanLyRapSlice;
