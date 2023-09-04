import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "./store";

// Define a custom hook to use the useSelector hook with RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Define a custom hook to use the useDispatch hook with AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
