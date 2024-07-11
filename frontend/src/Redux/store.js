import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/UsersSlice";
import { wishListReducer } from "./Reducers/WishlistSlice";
import { fetchUser, fetchWishlist } from "./middlewares";

const store = configureStore({ reducer: { userReducer, wishListReducer } });

store.dispatch(fetchWishlist);
store.dispatch(fetchUser);

export default store;
