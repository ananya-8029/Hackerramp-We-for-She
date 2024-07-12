require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/UserSchema");

const secretKey = process.env.JWT_SECRET;

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "Invalid User Credentials" });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(500).json({ message: "Invalid User Credentials" });
    }

    const data = { user: { id: user.id } };

    const signinToken = jwt.sign(data, secretKey, {
      expiresIn: 3600,
    });

    return res.status(200).json({ authToken: signinToken, user: user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const checkEmail = await UserSchema.findOne({ email: email });
    if (checkEmail) {
      return res.status(400).json({ message: "User already exists!" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const securedPassword = await bcrypt.hash(password, salt);

      const newUser = await UserSchema.create({
        ...req.body,
        password: securedPassword,
      });

      const data = { newUser: { id: newUser.id } };

      const authToken = jwt.sign(data, secretKey);
      return res.status(200).json({ authToken: authToken });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await UserSchema.findById(req.user.id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ message: "Not a valid user! " });
  }
};

exports.getUserByid = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserSchema.findById(id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ message: "Not a valid user! " });
  }
};
