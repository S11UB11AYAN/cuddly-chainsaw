import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
} from "./blog.controller.js";

const router = express();

router.get("/", getBlogs);

router.get("/:id", getBlogById);

router.post("/", createBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

export default router;
