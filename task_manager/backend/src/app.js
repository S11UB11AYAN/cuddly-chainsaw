import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/errorHandler.middleware.js";
import { authenticate } from "./middleware/auth.middleware.js";
import { router as authRouter } from "./routes/auth.route.js";
import { router as taskRouter } from "./routes/task.route.js";

const app = express();

const limiter = rateLimit({
  windowMS: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(helmet());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://your-frontend.com"
        : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/tasks", authenticate, taskRouter);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime,
  });
});

export { app };
