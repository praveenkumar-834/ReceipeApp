import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api", recipeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});