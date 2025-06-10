import express from "express";
import routes from "./routes";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
// Routes
app.use("/api", routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
