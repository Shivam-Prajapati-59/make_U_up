import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PUBLIC_KEY } from "./config";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_PUBLIC_KEY) as jwt.JwtPayload;
    console.log(decoded);

    if (!decoded || !decoded.sub) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    req.userId = decoded.sub as string;

    next(); // Continue to next middleware/handler
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}
