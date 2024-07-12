const UserSchema = require("../models/UserSchema");
const WishlistSchema = require("../models/WishListSchema");
UserSchema;

exports.createWishlist = async (req, res) => {
  try {
    const userId = req.params.userId;
    const wishlist = new WishlistSchema({
      ...req.body,
      userId: userId,
    });

    wishlist.shareableLink = `${req.protocol}://${req.get("host")}/wishlists/${
      wishlist._id
    }/${userId}/share`;

    await wishlist.save();
    res.status(200).json({ message: wishlist });
  } catch (err) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};

exports.getAllWishlists = async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const wishlists = await WishlistSchema.find({ userId: userId });
    res.status(200).json(wishlists);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getShareableLink = async (req, res) => {
  try {
    const { wishlistId, userId } = req.params;
    const wishlist = await WishlistSchema.findById(wishlistId).populate(
      "userId"
    );

    const user = await UserSchema.findById(userId);

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    // const shareableLink = `${req.protocol}://${req.get(
    //   "host"
    // )}/wishlists/${wishlistId}/${userId}/share`;
    // wishlist.shareableLink = shareableLink;
    // await wishlist.save();

    res.status(200).json({ user: user, items: wishlist.items });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
