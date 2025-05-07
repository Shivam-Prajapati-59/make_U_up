import { Router } from "express";
import websiteRoutes from "./websiteRoutes";
import { authMiddleware } from "../middleware";

const router = Router();
router.use("/v1/website", websiteRoutes, authMiddleware);
// Add other routes here as needed

// Health check route
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default router;
