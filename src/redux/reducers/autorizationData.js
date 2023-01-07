import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: null,
  lastname: null,
  workplace: null,
};

export const autorizationDataReducer = createSlice({
  name: "autorizationData",
  initialState,
  reducers: {
    appropriation: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
  },
});

export const { appropriation } = autorizationDataReducer.actions;
export default autorizationDataReducer.reducer;
