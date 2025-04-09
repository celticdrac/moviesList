import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilms } from '../../data/api';
import { Film } from '../../data/interfaces';

interface FilmsState {
    data: Array<Film>;
    loading: boolean;
    error: string | null | undefined | Error; 
}

const initialState: FilmsState = {
    data: [],
    loading: true,
    error: null
};

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilms.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchFilms.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const fetchFilms = createAsyncThunk(
    "events/fetchFilms",
    async () => {
        return await getFilms();
    }
)

export default filmsSlice.reducer;