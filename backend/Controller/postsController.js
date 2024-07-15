const PostSchema = require("../models/PostsSchema");

exports.uploadpost = async (req, res) => {
  try {
    const newPost = new PostSchema(req.body);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  PostSchema.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
};
