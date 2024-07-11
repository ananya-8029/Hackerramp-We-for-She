const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.DATABASE_URL;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database failed to connect", error);
  }
};

module.exports = { connectToMongo };
