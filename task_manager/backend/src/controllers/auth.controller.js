import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { handleValidationErrors } from "../middleware/validation.middleware.js";
import { generateToken } from "../utils/helper.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }
    const user = new User({ name, email, password });
    await user.save();

    const token = generateToken({ id: user._id }); // payload mane object always

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in registering User: " + error);
    res.status(500).json({ message: "Server error during registration" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user and include password for comparison
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(400).json({ message: "Account is deactivated" });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = generateToken({ id: user._id });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};
const logout = async (req, res) => {};

const getProfile = async (req, res) => {};
const updateProfile = async (req, res) => {};
const updatePassword = async (req, res) => {};
const deleteAccount = async (req, res) => {};

export {
  register,
  login,
  logout,
  // getProfile,
  // updateProfile,
  // updatePassword,
  // deleteAccount,
};
