import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {value: 0};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment:  (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByValue: (state, {payload}: PayloadAction<number>) => {
            state.value = state.value + payload;
        },
    }
});

export const { increment , decrement , reset, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;