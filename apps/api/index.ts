import express from "express";
import routes from "./routes";

import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow credentials if needed
  })
);
// Routes
app.use("/api", routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
