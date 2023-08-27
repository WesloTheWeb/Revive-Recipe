import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeData } from '@/interfaces/recipeTypes';
import { fetchRecipeFromAPI } from '@/helpers/apiHelpers';

interface SearchState {
    query: string;
    results: RecipeData[];
    loading: boolean;
    error: string | null;
}

export const searchRecipes = createAsyncThunk(
    'search/fetchRecipes',
    async (query: string, thunkAPI) => {
        try {
            const response = await fetchRecipeFromAPI(query);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    }
);


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
    extraReducers: builder => {
        builder
            .addCase(searchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload.hits.map(hit => hit.recipe); // extracting the recipes from the hits
            })            
            .addCase(searchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An unknown error occurred.';
            });
    }
});

export const { setQuery, setSearchResults, setLoading, setError } = searchSlice.actions;

export default searchSlice.reducer;
