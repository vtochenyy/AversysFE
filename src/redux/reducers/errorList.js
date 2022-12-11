import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  errorListData: {},
};

export const errorListReducer = createSlice({
  name: "ErrorList",
  initialState,
  reducers: {
    errorListCheck: (state, action) => {
      state.errorListData = action.payload;
    },
  },
});

export const getErrorsList = async (dispatch) => {
  await axios.get("http://localhost:9876/dicts/errors").then((data) => {
    dispatch(errorListCheck(data.data));
  });
};

export const { errorListCheck } = errorListReducer.actions;
export default errorListReducer.reducer;
