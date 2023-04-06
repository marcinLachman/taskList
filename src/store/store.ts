import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import tasksReducer from "./features/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  }
});

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;