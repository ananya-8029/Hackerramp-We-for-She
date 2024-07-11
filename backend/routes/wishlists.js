const express = require("express");
const router = express.Router();

const wishlistController = require("../Controller/wishListController");
const fetchuser = require("../middleware/fetchUser");

// Route 1: Create a new user
router.post(
  "/createwishlist/:userId",
  fetchuser,
  wishlistController.createWishlist
);

//Route 2: Get all wishlists
router.get("/getAllwishlist", fetchuser, wishlistController.getAllWishlists);

//Route 2: Shareable Link for wishList
router.get("/:wishlistId/:userId/share", wishlistController.getShareableLink);

module.exports = router;
