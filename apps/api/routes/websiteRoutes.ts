import express from "express";
import { prismaClient } from "db/client";

const router = express.Router();

router.post("/", async (req, res) => {
  const userId = req.userId!;
  const url = req.body;

  const data = prismaClient.user.create({
    data: {
      userId,
      url,
    },
  });
  res.json({
    id: data.id,
  });
});

router.get("/status", (req, res) => {
  // Your implementation here
});

router.get("/", (req, res) => {
  // Your implementation here
});

router.delete("/", (req, res) => {
  // Your implementation here
});

export default router;
