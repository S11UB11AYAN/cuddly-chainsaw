import express from "express";
import blogRoutes from "./blog/blog.routes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/blog", blogRoutes);

export { app };
