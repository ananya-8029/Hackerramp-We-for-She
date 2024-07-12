import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/UsersSlice";
import { wishListReducer } from "./Reducers/WishlistSlice";
import { fetchUser, fetchWishlist } from "./middlewares";
import { followersReducer } from "./Reducers/FollowersSlice";
import { followingsReducer } from "./Reducers/FollowingsSlice";

const store = configureStore({
  reducer: {
    userReducer,
    wishListReducer,
    followersReducer,
    followingsReducer,
  },
});

store.dispatch(fetchUser);
store.dispatch(fetchWishlist);

export default store;
