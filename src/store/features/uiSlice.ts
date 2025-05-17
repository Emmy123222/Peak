// In your uiSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface UIState {
    loading: Record<string, boolean>;
}

const initialState: UIState = {
    loading: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        startLoading: (state, action) => {
            state.loading[action.payload] = true;
        },
        stopLoading: (state, action) => {
            state.loading[action.payload] = false;
        },
    },
});

export const { startLoading, stopLoading } = uiSlice.actions;
export default uiSlice.reducer;