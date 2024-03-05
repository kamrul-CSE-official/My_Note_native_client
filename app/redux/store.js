import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/features/notesSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
