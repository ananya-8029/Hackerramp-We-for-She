const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");

const authController = require("../Controller/authController.js");

// Route 1: api/auth/register
router.post("/register", authController.register);

// Route 2: api/auth/login
router.post("/login", authController.login);

// Route 3: api/auth/getUser
router.get("/getUser",fetchuser, authController.getUser);

// Route 4: api/auth/getUser/:id
router.get("/getUser/:id", authController.getUserByid);

module.exports = router;