import { createAsyncThunk } from '@reduxjs/toolkit';
import { quanLyRapServices } from 'services';
import { sleep } from 'utils';

export const LayThongTinCumRapThunk = createAsyncThunk('LayThongTinCumRapThunk', async (_, { rejectWithValue }) => {
    try {
        const data = await quanLyRapServices.LayThongTinCumRap();
        await sleep(1000);
        return data.data.content;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const LayThongTinLichChieuThunk = createAsyncThunk(
    'LayThongTinLichChieuThunk',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.LayThongTinLichChieu();
            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);
