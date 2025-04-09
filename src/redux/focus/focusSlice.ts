import { createSlice } from '@reduxjs/toolkit';

const defaultElementsQty = 50;

export interface FocusState {
  value: number;
  elementsQty: number;
}

const initialState: FocusState = {
  value: 0,
  elementsQty: defaultElementsQty,
};

const focusSlice = createSlice({
  name: 'focus',
  initialState,
  reducers: {
    incrementIndex: (state) => {
        if (state.value + 1 < state.elementsQty) state.value += 1;
    },
    decrementIndex: (state) => {
      if (state.value -1 >= 0) state.value -= 1;
    },
    setFocus: (state, action) => {
      state.value = action.payload;
    },
    setMax: (state, action) => {
      state.elementsQty = action.payload;
    }
  },
});

export const { incrementIndex, decrementIndex, setFocus, setMax } = focusSlice.actions;

export default focusSlice.reducer;
