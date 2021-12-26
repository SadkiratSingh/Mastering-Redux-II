//just for handling ui response wrt to other changes.
import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartVisible: true };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
