import { configureStore } from "@reduxjs/toolkit";
import errorListReducer from "./reducers/errorList";
import registerReducer from "./reducers/registerReducer";

export const store = configureStore({
  reducer: {
    registerData: registerReducer,
    errorList: errorListReducer,
  },
});
