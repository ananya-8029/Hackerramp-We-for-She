const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

const authController = require("../Controller/authController.js");

// Route 1: api/auth/register
router.post("/register", authController.register);

// Route 2: api/auth/login
router.post("/login", authController.login);

// Route 2: api/auth/getUser
router.get("/getUser",fetchuser, authController.getUser);

module.exports = router;