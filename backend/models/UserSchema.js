const mongoose = require("mongoose");
const { Schema } = mongoose;
const ReelSchema = require("./ReelsSchema");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: String,
    bio: String,
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    moments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reel",
      },
    ],
    posts:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
