import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedGunState {
	value: number;
}

const initialState: SelectedGunState = {
	value: 0,
};

const SelectedGunSlice = createSlice({
	name: 'Selected Gun',
	initialState,
	reducers: {
		incremented(state) {
			// it's okay to do this because immer makes it immutable
			// under the hood
			state.value++;
		},
		amountAdded(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
		// decrement
		// reset
	},
});

export const { incremented, amountAdded } = SelectedGunSlice.actions;
export default SelectedGunSlice.reducer;
