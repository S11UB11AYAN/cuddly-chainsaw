import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { login, logout, register } from "../controllers/auth.controller.js";
import {
  ValidateLogin,
  ValidateRegister,
} from "../middleware/validation.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express();

//public api
router.post("/register", ValidateRegister, register);
router.post("/login", ValidateLogin, login);

//private api
router.get("/verify", authenticate, (req, res) => {
  res.json({
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    },
  });
});

router.post("/logout", authenticate, (req, res) => {
  res.json({ message: "Logout successful" });
});

export { router };
