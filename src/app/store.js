import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import basketReducer from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    counter: counterReducer,
  },
});
