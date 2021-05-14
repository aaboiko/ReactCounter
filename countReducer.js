import { createSlice } from '@reduxjs/toolkit'

const initialState = 0;

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        INCREMENT: (state) => {
            return state + 1;
        },
        DECREMENT: (state) => {
            console.log("sdf");
            return state - 1;
        }
    }
});

export const { INCREMENT, DECREMENT } = countSlice.actions;

export default countSlice.reducer;