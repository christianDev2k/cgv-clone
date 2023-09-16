import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginSchemaType } from 'schema';
import { quanLyNguoiDungService } from 'services';
import { UpdateUser } from 'types';
import { handleError, sleep } from 'utils';
import { getAccessToken } from 'utils';

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungService.login(payload);
            await sleep();
            return data.data.content;
        } catch (err) {
            handleError(err);
            return rejectWithValue(err);
        }
    },
);

export const getUserByAccessTokenThunk = createAsyncThunk(
    'getUserByAccessTokenThunk',
    async (_, { rejectWithValue }) => {
        try {
            const token = getAccessToken();
            if (token) {
                const data = await quanLyNguoiDungService.getUserByAccessToken();
                return data.data.content;
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

export const UpdateAccountThunk = createAsyncThunk(
    'UpdateAccountThunk',
    async (payload: UpdateUser, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungService.updateAccount(payload);
            await sleep(1000);
            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);
