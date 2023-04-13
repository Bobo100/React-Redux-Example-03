// components/redux/store/store.tsx
import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../slice/toDoSlice'

export const store = configureStore({
    reducer: {
        toDoReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// 這兩步驟是為了之後的型別推論 保證型別的正確性
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch