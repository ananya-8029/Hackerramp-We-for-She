import { createSlice } from "@reduxjs/toolkit";

const initialState = { followings: [] };
export const followingsSlice = createSlice({
  name: "followings",
  initialState,
  reducers: {
    addFollowing: (state, action) => {
      const following = action.payload;
      state.followings = [...state.followings, following];
      // console.log(state.incomes)
    },
    // clearIt: (state) => {
    //   state.incomes = [];
    // },
  },
});

export const { addFollowing } = followingsSlice.actions;
export const followingsReducer = followingsSlice.reducer;
