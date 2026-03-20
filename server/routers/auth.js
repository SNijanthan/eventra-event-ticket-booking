const express = require("express");

const authRouter = express.Router();
const {
  registerUser,
  loginUser,
  verifyOtp,
} = require("../controllers/authController.js");

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/verify-otp", verifyOtp);

module.exports = authRouter;
