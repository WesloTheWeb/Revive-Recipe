import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice';
import recipeReducer from './recipeSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    recipe: recipeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch