import { createSlice } from "@reduxjs/toolkit";
import availableItems from "../../availableItems";

const initialState = {
  basketItems: availableItems,
  totalItems: 0,
  totalPrice: 0,
};

const getPrice = (count, regular_price, special_price, itemsForSpecial) => {
  let numSpecial = Math.floor(count / itemsForSpecial);
  let numRegular = count % itemsForSpecial;
  return numSpecial * special_price + numRegular * regular_price;
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.basketItems = state.basketItems.find((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      // Find the item that has been increased
      const basketItem = state.basketItems.find(
        (item) => item.id === action.payload.id
      );
      basketItem.totalBasket++;
    },
    decrease: (state, action) => {
      const basketItem = state.basketItems.find(
        (item) => item.id === action.payload.id
      );
      basketItem.totalBasket--;
    },
    calculatePrices: (state) => {
      let totalItems = 0;
      let totalPrice = 0;
      state.basketItems.forEach((item) => {
        totalItems += item.totalBasket;
        totalPrice += item?.special_price
          ? getPrice(
              item.totalBasket,
              item.regular_price,
              item.special_price,
              item.itemsForSpecial
            )
          : item.totalBasket * item.regular_price;
      });
      state.totalItems = totalItems;
      state.totalPrice = Number(totalPrice.toFixed(2));
    },
  },
});

export const { removeItem, increase, decrease, calculatePrices } =
  basketSlice.actions;

export default basketSlice.reducer;
