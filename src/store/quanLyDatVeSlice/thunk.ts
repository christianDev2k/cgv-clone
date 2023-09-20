import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyDatVeServices } from 'services';
import { DatVeType } from 'types';

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

export const DatVeThunk = createAsyncThunk('DatVeThunk', async (payload: DatVeType, { rejectWithValue }) => {
    try {
        const data = await quanLyDatVeServices.DatVe(payload);
        return data.data.content;
    } catch (err) {
        return rejectWithValue(err);
    }
});
