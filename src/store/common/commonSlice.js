import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "",
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = commonSlice.actions;

export default commonSlice.reducer;
