//just for handling cart calculations.
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const itemExists = state.items.findIndex(
        (item) => newItem.id === item.id
      );
      state.totalQuantity++;
      if (itemExists === -1) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        const item = state.items[itemExists];
        item.quantity++;
        item.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (itemFound.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        itemFound.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
