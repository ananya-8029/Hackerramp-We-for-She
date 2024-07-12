import { createSlice } from "@reduxjs/toolkit";

const initialState = { followers: [] };
export const followersSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {
    addFollower: (state, action) => {
      const follower = action.payload;
      state.followers = [...state.followers, follower];
      // console.log(state.incomes)
    },
    // clearIt: (state) => {
    //   state.incomes = [];
    // },
  },
});

export const { addFollower } = followersSlice.actions;
export const followersReducer = followersSlice.reducer;
