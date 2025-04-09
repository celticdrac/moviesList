import { configureStore } from '@reduxjs/toolkit';
import focusReducer from './focus/focusSlice';
import filmsReducer from './films/filmsSlice';

export const store = configureStore({
  reducer: {
    focus: focusReducer,
    films: filmsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
