import { AuthStatus } from '../../../../../extra/aave-ui/src/libs/pool-data-provider/graphql/index';
import {createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    role: 'tutor' | 'student' | 'parent'| null;
    isAuthenticated: boolean;
}

const initialState: AuthState ={
    token: null,
    role: null,
    isAuthenticated: false,
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
        login: (state, action: PayloadAction <{token: string, role: AuthState['role']}>) => {
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
        },
        setRole: (state, action: PayloadAction<AuthState['role']>) => {
            state.role = action.payload;
        }
    }
})

export const {login, logout, setRole} = authSlice.actions;
export default authSlice.reducer;