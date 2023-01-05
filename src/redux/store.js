import { configureStore } from "@reduxjs/toolkit";
import autorizationDataReducer from "./reducers/autorizationData";
import errorListReducer from "./reducers/errorList";
import registerReducer from "./reducers/registerReducer";

export const store = configureStore({
  reducer: {
    registerData: registerReducer,
    errorList: errorListReducer,
    autorizationData: autorizationDataReducer,
  },
});
