import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const attemptsSlice = createSlice({
  name: 'attempts',
  initialState: {
    attempts: 0
  },
  reducers: {
    increment: (state) => {
      state.attempts += 1;
    },
    reset: (state) => {
      state.attempts = 0; 
    }
  }
});

export const { increment, reset } = attemptsSlice.actions;

export default attemptsSlice.reducer;