const UserSchema = require("../models/UserSchema");
const ReelSchema = require("../models/ReelsSchema");

exports.uploadareel = async (req, res) => {
  try {
    const newReel = new ReelSchema(req.body);
    await newReel.save();
    res.status(200).json(newReel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getallreel = async (req, res) => {
  ReelSchema.find()
    .then((moments) => res.json(moments))
    .catch((err) => res.status(400).json("Error: " + err));
};
