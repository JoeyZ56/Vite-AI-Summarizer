import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

//confifuring a store.
//store is a global state.
//reducer is a function that takes a state and an action and returns a new state.
//middleware is a function that takes a store and returns a function that takes a next and returns a new next.

export const store = configureStore({
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
