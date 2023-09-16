import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyPhimService } from 'services';
import { sleep } from 'utils';

export const getMovieListThunk = createAsyncThunk('getMovieListThunk', async (_, { rejectWithValue }) => {
    try {
        const list_1 = await quanLyPhimService.LayDanhSachPhim('?maNhom=GP01');
        const list_2 = await quanLyPhimService.LayDanhSachPhim('?maNhom=GP09');
        const list_3 = await quanLyPhimService.LayDanhSachPhim('?maNhom=GP03');
        await sleep(1500);

        const movies = [...list_1.data.content, ...list_2.data.content, ...list_3.data.content];
        return movies;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const getBannerListThunk = createAsyncThunk('getBannerListThunk', async (_, { rejectWithValue }) => {
    try {
        const data = await quanLyPhimService.LayDanhSachBanner();
        await sleep(1500);

        return data.data.content;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const GetInforMovieThunk = createAsyncThunk(
    'getInforMovieThunk',
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await quanLyPhimService.LayThongTinPhim(payload);
            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);
