import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

export const slice = createSlice({
    name: 'root',
    initialState,
    reducers: {
    }
});

export const actions = slice.actions;

export const rootReducer = slice.reducer;