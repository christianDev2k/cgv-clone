import { createSlice } from '@reduxjs/toolkit';
import { UserByAccessToken, UserLogin } from 'types';
import { getUserByAccessTokenThunk, loginThunk } from '.';

type initialStateType = {
    userLogin: UserLogin | UserByAccessToken;
    accessToken: string;
    isFetchingLogin: boolean;
};

const initialState: initialStateType = {
    userLogin: undefined,
    accessToken: undefined,
    isFetchingLogin: false,
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

            .addCase(getUserByAccessTokenThunk.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
            });
    },
});

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = quanLyNguoiDungSlice;
