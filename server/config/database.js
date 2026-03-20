const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { connectToDatabase };
