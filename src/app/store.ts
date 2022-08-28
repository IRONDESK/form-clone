import { configureStore } from "@reduxjs/toolkit";
import Preview from "../store/Preview";

export const store = configureStore({
  reducer: {
    Preview,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
