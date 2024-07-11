const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
  },
  itemLink: {
    type: String,
  },
  itemImage: {
    type: String,
  },
});

const wishlistSchema = new Schema({
  wishListName: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  items: [itemSchema],
  shareableLink: {
    type: String,
  },
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
