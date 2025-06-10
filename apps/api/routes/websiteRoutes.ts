import express from "express";
import { prismaClient } from "db/client";
import { authMiddleware } from "../middleware";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const userId = req.userId!;
  const { url } = req.body;

  const data = await prismaClient.website.create({
    data: {
      userId: userId,
      url: url,
    },
  });
  res.json({
    id: data.id,
  });
});

router.get("/status", async (req, res) => {
  const websiteId = req.query.websiteId as unknown as string;
  const userId = req.userId!;

  const data = await prismaClient.website.findFirst({
    where: {
      id: websiteId,
      userId: userId,
      disabled: false,
    },
    include: {
      ticks: true,
    },
  });

  res.json({
    data: data,
  });
});

router.delete("/", async (req, res) => {
  const websiteId = req.query.websiteId as unknown as string;
  const userId = req.userId!;

  await prismaClient.website.update({
    where: {
      id: websiteId,
      userId: userId,
    },
    data: {
      disabled: true,
    },
  });
  res.json({
    message: "Website disabled successfully",
  });
});

export default router;
