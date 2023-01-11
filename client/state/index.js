import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	attempts: 0,
	devle: {},
};

export const attemptsSlice = createSlice({
	name: 'attempts',
	initialState,
	reducers: {
		increment: (state) => {
			state.attempts += 1;
		},
		reset: (state) => {
			state.attempts = 0;
		},
		setDevle: (state, action) => {
			state.devle = action.payload;
		},
	},
});

export const { increment, reset, setDevle } = attemptsSlice.actions;

export default attemptsSlice.reducer;
