"use client"
import {createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    role: 'TUTOR' | 'STUDENT' | 'PARENT' | null;
    isAuthenticated: boolean;
    email: string
}

const initialState: AuthState ={
    token: null,
    role: null,
    isAuthenticated: false,
    email: typeof window !== 'undefined' ? (localStorage.getItem('state-email')) || '' : "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        /**
         * Called when a user successfully logs in.
         * @param {object} action.payload - object with token and role
         * @param {string} action.payload.token - auth token
         * @param {string} action.payload.role - role of user
         */

        setAuth: (state: AuthState, action: PayloadAction<{access_token: string, user: any}>) => {
            state.token = action.payload.access_token;
            state.role = action.payload.user.role;
            // state.isAuthenticated = true;
            sessionStorage.setItem('pc_token', action.payload.access_token);

        },
        clearAuth: (state: AuthState) => {
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
            sessionStorage.removeItem('pc_token');
        },


        login: (state: AuthState, action: PayloadAction <{access_token: string, user: any}>) => {
            state.token = action.payload.access_token;
            state.role = action.payload.user.role;
            state.isAuthenticated = true;

            sessionStorage.setItem('pc_token', action.payload.access_token);
        },
        logout: (state: AuthState) => {
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
            sessionStorage.removeItem('pc_token');
        },
        setRole: (state: AuthState, action: PayloadAction<AuthState['role']>) => {
            state.role = action.payload;
        },
        setEmail: (state: AuthState, action: PayloadAction<AuthState['email']>) => {
            localStorage.setItem('state-email', action.payload);
            state.email = action.payload;
        }
    }
})

export const {login, logout, setRole, setEmail, setAuth, clearAuth} = authSlice.actions;
export default authSlice.reducer;