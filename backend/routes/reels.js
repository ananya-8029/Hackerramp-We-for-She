const express = require("express");
const router = express.Router();

const reelsController = require("../Controller/reelsController");
const fetchuser = require("../middleware/fetchUser");

// Route 1: Creating a new Moment
router.post("/createnewmoment", fetchuser, reelsController.uploadareel);

// Route 2: Get All the reels with no specific id
router.get("/getallmoments", reelsController.getallreel)

module.exports = router;
