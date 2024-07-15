const express = require("express");
const router = express.Router();

const postController = require("../Controller/postsController");
const fetchuser = require("../middleware/fetchUser");

// Route 1: Uploading a new post
router.post("/uploadpost", fetchuser, postController.uploadpost);

// Route 2: Getting all the posts
router.get("/getallPost", postController.getAllPosts);

module.exports = router;
