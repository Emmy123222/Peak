// import { RootState } from './../../node_modules/reselect/dist/reselect.d';
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/store/features/authSlice"
import {loadState, saveState} from "@/store/localStorage";
import  uiSlice  from "./features/uiSlice";

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiSlice, 
    },
    // preloadedState,
})

store.subscribe(() => {
    saveState({
        auth: store.getState().auth
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;