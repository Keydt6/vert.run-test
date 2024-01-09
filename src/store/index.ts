import { configureStore } from '@reduxjs/toolkit'
import activitiesReducer from './activities/slice'

const persistenceLocalStorageMiddleware: any = (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('redux_state', JSON.stringify(store.getState()))
}

export const store = configureStore({
    reducer: {
        activities: activitiesReducer,
    },
    middleware: (getDefaultMiddleware) => {
        // WARNING: this means that _none_ of the default middleware are added!
        return [persistenceLocalStorageMiddleware]
        // or for TS users, use:
        // return new Tuple(myMiddleware)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch