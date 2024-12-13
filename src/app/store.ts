import { configureStore } from '@reduxjs/toolkit';
import { countrySlice } from '../services/features/countries/countriesSlice';

export const store = configureStore({
  reducer: {
    [countrySlice.reducerPath]: countrySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countrySlice.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

