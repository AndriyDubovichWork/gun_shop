import { configureStore } from '@reduxjs/toolkit';
import SelectedGunSlice from './reducers/SelectedGunSlice';
export const store = configureStore({
	reducer: { selectedGun: SelectedGunSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
