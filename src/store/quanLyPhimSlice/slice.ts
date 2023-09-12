import { createSlice } from '@reduxjs/toolkit';
import { Banner, Movie } from 'types';
import { getBannerListThunk, getMovieListThunk, getNowShowingListThunk } from './thunk';

type initialStateProps = {
    movieList: Movie[];
    nowShowingList: Movie[];
    bannerList: Banner[];
    isFetchingMovieList: boolean;
    isFetchingBannerList: boolean;
    isFetchingNowShowingList: boolean;
};

const initialState: initialStateProps = {
    movieList: undefined,
    bannerList: undefined,
    nowShowingList: undefined,
    isFetchingMovieList: false,
    isFetchingBannerList: false,
    isFetchingNowShowingList: false,
};

const quanLyPhimSlice = createSlice({
    name: 'quanLyPhimSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // Movie list
            .addCase(getMovieListThunk.pending, state => {
                state.isFetchingMovieList = true;
            })
            .addCase(getMovieListThunk.fulfilled, (state, { payload }) => {
                state.movieList = payload;
                state.isFetchingMovieList = false;
            })
            .addCase(getMovieListThunk.rejected, state => {
                state.isFetchingMovieList = false;
            })

            // Banner
            .addCase(getBannerListThunk.pending, state => {
                state.isFetchingBannerList = true;
            })
            .addCase(getBannerListThunk.fulfilled, (state, { payload }) => {
                state.bannerList = payload;
                state.isFetchingBannerList = false;
            })
            .addCase(getBannerListThunk.rejected, state => {
                state.isFetchingBannerList = false;
            })

            // Now showing
            .addCase(getNowShowingListThunk.pending, state => {
                state.isFetchingNowShowingList = true;
            })
            .addCase(getNowShowingListThunk.fulfilled, (state, { payload }) => {
                state.isFetchingNowShowingList = false;
                state.nowShowingList = payload;
            })
            .addCase(getNowShowingListThunk.rejected, state => {
                state.isFetchingNowShowingList = false;
            });
    },
});

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActiosn } = quanLyPhimSlice;
