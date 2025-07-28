import router from "express";
import {
  deleteAccount,
  getProfile,
  updatePassword,
  updateProfile,
} from "../controllers/auth.controller";

router.get("/profile", getProfile);

router.put("/profile", updateProfile);
router.put("/password", updatePassword);

router.delete("/account", deleteAccount);

export { router };
