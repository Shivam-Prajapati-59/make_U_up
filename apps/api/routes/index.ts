import { Router } from "express";
import websiteRoutes from "./websiteRoutes";

import { prismaClient } from "db/client";
import { authMiddleware } from "../middleware";

const router = Router();
router.use("/v1/website", authMiddleware, websiteRoutes);
// Add other routes here as needed

router.get("/v1/websites", authMiddleware, async (req, res) => {
  const userId = req.userId!;
  const websites = await prismaClient.website.findMany({
    where: {
      userId: userId,
      disabled: false,
    },
    include: {
      ticks: true,
    },
  });
  res.json({
    websites: websites,
  });
});
// Health check route
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default router;
