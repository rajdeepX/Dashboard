import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contactSlice";

// create the Redux store
export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

// define types for RootState and AppDispatch using typeof
export type RootState = ReturnType<typeof store.getState>; // rootState is the type of the entire Redux state

export type AppDispatch = typeof store.dispatch; // appDispatch is the type of the Redux store's dispatch function
