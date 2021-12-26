// this is where our redux store exists
import uiSliceReducer from "./ui-slice";
import cartSliceReducer from "./cart-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { ui: uiSliceReducer, cart: cartSliceReducer },
});

export default store;
