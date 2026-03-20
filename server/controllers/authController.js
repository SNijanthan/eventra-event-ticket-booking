const bcrypt = require("bcrypt");

const { User } = require("../model/User.model.js");
const { hashPassword } = require("../utils/hashPassword.js");

// ! Register new user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ! Checking if the user email is already present or not

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // ! Hashing password

    const hashedPassword = await hashPassword(password);

    const user = new User({ name, email, password: hashedPassword });

    await user.save();

    res.status(201).json({
      status: true,
      message: "User added successfully",
      data: req.body,
    });
  } catch (error) {
    res.status(400).send(`Error: ${error.message}`);
  }
};

// ! Login user using credentials
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Fields cannot be empty");
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new Error("Incorrect credentials, Try again..!, Email wrong");
    }

    const checkPassword = await bcrypt.compare(password, existingUser.password);

    if (!checkPassword) {
      throw new Error("Incorrect credentials, Try again..!, Password wrong");
    }

    res.status(200).json({
      status: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(400).send(`Error: ${error.message}`);
  }
};

// ! Verifying OTP
exports.verifyOtp = async (req, res) => {};
