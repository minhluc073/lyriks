import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazhamCoreApi } from "./services/shazamCore";

export const store = configureStore({
  reducer: {
    [shazhamCoreApi.reducerPath]: shazhamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazhamCoreApi.middleware),
});
