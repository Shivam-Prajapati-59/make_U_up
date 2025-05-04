import { Router } from "express";
import websiteRoutes from "./websiteRoutes";

const router = Router();
router.use("/api/v1/website", websiteRoutes);
// Add other routes here as needed

// Health check route
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default router;
