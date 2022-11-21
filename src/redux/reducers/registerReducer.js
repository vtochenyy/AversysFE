import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerInfo: {},
};

export const registerReducer = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    createRegisterState: (state, action) => {
      state.registerInfo = action.payload;
    },
  },
});

export const { createRegisterState } = registerReducer.actions;
export default registerReducer.reducer;
