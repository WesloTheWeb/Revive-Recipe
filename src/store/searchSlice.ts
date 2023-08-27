import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeData } from '@/interfaces/recipeTypes';

interface SearchState {
    query: string;
    results: RecipeData[];
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    query: '',
    results: [],
    loading: false,
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setSearchResults: (state, action: PayloadAction<RecipeData[]>) => {
            state.results = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const { setQuery, setSearchResults, setLoading, setError } = searchSlice.actions;

export default searchSlice.reducer;
