import { createSlice } from '@reduxjs/toolkit';
import { Banner, Movie } from 'types';
import { GetInforMovieThunk, getBannerListThunk, getMovieListThunk } from './thunk';

type initialStateProps = {
    movieList: Movie[];
    movieDetail: Movie;
    bannerList: Banner[];
    isFetchingMovieList: boolean;
    isFetchingBannerList: boolean;
    isFetchingmovieDetail: boolean;
};

const initialState: initialStateProps = {
    movieList: undefined,
    bannerList: undefined,
    movieDetail: undefined,
    isFetchingMovieList: false,
    isFetchingBannerList: false,
    isFetchingmovieDetail: false,
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

            // Movie Detail
            .addCase(GetInforMovieThunk.pending, state => {
                state.isFetchingmovieDetail = true;
            })
            .addCase(GetInforMovieThunk.fulfilled, (state, { payload }) => {
                state.movieDetail = payload;
                state.isFetchingmovieDetail = false;
            })
            .addCase(GetInforMovieThunk.rejected, state => {
                state.isFetchingmovieDetail = false;
            });
    },
});

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActiosn } = quanLyPhimSlice;
