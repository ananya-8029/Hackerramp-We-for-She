import { createSlice } from "@reduxjs/toolkit";

const initialState = { wishLists: [] };
export const wishListSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addWishList: (state, action) => {
      const wishList = action.payload;
      state.wishLists = [...state.wishLists, wishList];
      // console.log(state.incomes)
    },
    // clearIt: (state) => {
    //   state.incomes = [];
    // },
  },
});

export const { addWishList } = wishListSlice.actions;
export const wishListReducer = wishListSlice.reducer;
