import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GunsT } from '../../../types/GunsT';

interface SelectedGunState {
	selectedId: number;
	selectedType: keyof GunsT;
}

const initialState: SelectedGunState = {
	selectedId: 1,
	selectedType: 'Rifles',
};

const SelectedGunSlice = createSlice({
	name: 'Selected Gun',
	initialState,
	reducers: {
		setSelectedId(state, action: PayloadAction<number>) {
			state.selectedId = action.payload;
		},
		setSelectedType(state, action: PayloadAction<keyof GunsT>) {
			state.selectedType = action.payload;
		},
	},
});

export const { setSelectedId, setSelectedType } = SelectedGunSlice.actions;
export default SelectedGunSlice.reducer;
