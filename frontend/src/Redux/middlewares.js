import axios from "axios";
import { setUser } from "./Reducers/UsersSlice";
import { addWishList } from "./Reducers/WishlistSlice";
import { addFollower } from "./Reducers/FollowersSlice";
import { addFollowing } from "./Reducers/FollowingsSlice";

// fetch user
export const fetchUser = async (dispatch) => {
  try {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      return;
    }
    const response = await axios.get("http://localhost:5000/api/auth/getUser", {
      headers: {
        "auth-token": authToken,
      },
    });
    if (response.statusText !== "OK") {
      console.error("Failed to fetch all incomes: ", response.status);
      return;
    }

    const user = response.data.user;
    // console.log(user);
    localStorage.setItem("user-id", user._id);
    await dispatch(addFollower(user.followers));
    await dispatch(addFollowing(user.following));
    await dispatch(setUser(user));
    return;
  } catch (error) {
    console.log(error);
  }
};

// Get WishList
export const fetchWishlist = async (dispatch) => {
  try {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      return;
    }
    const userId = localStorage.getItem("user-id");
    const response = await axios.get(
      `http://localhost:5000/api/wishlists/getAllwishlist?userId=${userId}`,
      {
        headers: {
          "auth-token": authToken,
        },
      }
    );
    if (response.statusText !== "OK") {
      console.error("Failed to fetch all incomes: ", response.status);
      return;
    }
    const wishlists = response.data[0];
    await dispatch(addWishList(wishlists));
  } catch (error) {
    console.log(error);
  }
};
