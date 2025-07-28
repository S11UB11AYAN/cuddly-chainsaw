import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getTaskById,
  stats,
  toggleTask,
  updateTask,
} from "../controllers/task.controller.js";

import { ValidateTask } from "../middleware/validation.middleware.js";

const router = express();

router.get("/", getAllTask);
router.get("/:id", getTaskById);
router.get("/stats", stats);

router.post("/", ValidateTask, createTask);

router.put("/:id", ValidateTask, updateTask);
router.put("/:id/toggle", toggleTask);

router.delete("/:id", deleteTask);

export { router };
