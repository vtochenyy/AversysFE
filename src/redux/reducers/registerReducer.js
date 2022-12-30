import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { root } from "../../api/root_api";

const initialState = {
  registerInfo: {},
};

export const registerReducer = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    createRegisterState: (state, action) => {
      state.registerInfo = action.payload;
      axios.post(root.REGISTER, action.payload);
    },
  },
});

export const { createRegisterState } = registerReducer.actions;
export default registerReducer.reducer;
