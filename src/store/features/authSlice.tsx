"use client"
import {createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    role: 'tutor' | 'student' | 'parent'| null;
    isAuthenticated: boolean;
    email: string
}

const initialState: AuthState ={
    token: null,
    role: null,
    isAuthenticated: false,
    email: (localStorage.getItem('state-email')) || ''
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
        login: (state: AuthState, action: PayloadAction <{access_token: string, user: any}>) => {
            state.token = action.payload.access_token;
            state.role = action.payload.user.role;
            state.isAuthenticated = true;
        },
        logout: (state: AuthState) => {
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
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

export const {login, logout, setRole, setEmail} = authSlice.actions;
export default authSlice.reducer;