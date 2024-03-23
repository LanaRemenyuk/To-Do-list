import express from "express";
// routes
import authRoutes from "./auth.routes.js";
import tasksRoutes from "./tasks.routes.js";

const router = express.Router({ mergeParams: true });

router.use("/auth", authRoutes);
router.use("/tasks", tasksRoutes);

export default router;
