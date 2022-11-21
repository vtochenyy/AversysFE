import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducers/registerReducer";

export const store = configureStore({
  reducer: {
    registerData: registerReducer,
  },
});
