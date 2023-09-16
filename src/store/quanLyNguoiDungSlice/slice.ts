import { createSlice } from '@reduxjs/toolkit';
import { UpdateUserResponse, UserByAccessToken, UserLogin } from 'types';
import { UpdateAccountThunk, getUserByAccessTokenThunk, loginThunk } from '.';

type initialStateType = {
    userLogin: UserLogin | UserByAccessToken | UpdateUserResponse;
    accessToken: string;
    isFetchingLogin: boolean;
    isUpdatingUser: boolean;
};

const initialState: initialStateType = {
    userLogin: undefined,
    accessToken: undefined,
    isFetchingLogin: false,
    isUpdatingUser: false,
};

const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDungSlice',
    initialState,
    reducers: {
        logOutUser: state => {
            state.accessToken = undefined;
            state.userLogin = undefined;

            localStorage.removeItem('ACCESS_TOKEN');
        },
    },
    extraReducers(builder) {
        builder
            // Login
            .addCase(loginThunk.pending, state => {
                state.isFetchingLogin = true;
            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.isFetchingLogin = false;
                state.userLogin = payload;
                state.accessToken = payload.accessToken;

                localStorage.setItem('ACCESS_TOKEN', payload.accessToken);
            })
            .addCase(loginThunk.rejected, state => {
                state.isFetchingLogin = false;
            })

            // Get access token
            .addCase(getUserByAccessTokenThunk.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
            })

            // Update user
            .addCase(UpdateAccountThunk.pending, state => {
                state.isUpdatingUser = true;
            })
            .addCase(UpdateAccountThunk.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
                state.isUpdatingUser = false;
            })
            .addCase(UpdateAccountThunk.rejected, state => {
                state.isUpdatingUser = false;
            });
    },
});

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = quanLyNguoiDungSlice;
