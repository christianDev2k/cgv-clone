import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyPhimService } from 'services';

export const getMovieListThunk = createAsyncThunk('getMovieListThunk', async (_, { rejectWithValue }) => {
    try {
        const data = await quanLyPhimService.LayDanhSachPhim();
        return data.data.content;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const getBannerListThunk = createAsyncThunk('getBannerListThunk', async (_, { rejectWithValue }) => {
    try {
        const data = await quanLyPhimService.LayDanhSachBanner();
        return data.data.content;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const getNowShowingListThunk = createAsyncThunk('getNowShowingListThunk', async (_, { rejectWithValue }) => {
    try {
        const list_1 = await quanLyPhimService.LayDanhSachPhim('?maNhom=GP01');
        const list_2 = await quanLyPhimService.LayDanhSachPhim('?maNhom=GP02');
        const list_3 = await quanLyPhimService.LayDanhSachPhim('?maNhom=GP03');
        const movies = [...list_1.data.content, ...list_2.data.content, ...list_3.data.content];

        return movies.filter(movie => movie.dangChieu);
    } catch (err) {
        return rejectWithValue(err);
    }
});
