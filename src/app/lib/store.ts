import { configureStore } from "@reduxjs/toolkit";
import variableReducer from "./feature/datafeacture/dataSlice";

export const store = configureStore({
  reducer: {
    variable: variableReducer,
  },
});

// ✅ Correct types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
