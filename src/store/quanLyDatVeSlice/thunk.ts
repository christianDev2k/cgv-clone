import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyDatVeServices } from 'services';

export const LayDanhSachPhongVeThunk = createAsyncThunk(
    'LayDanhSachPhongVeThunk',
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await quanLyDatVeServices.LayDanhSachPhongVe(payload);
            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);
