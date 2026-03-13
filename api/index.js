import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import recipeRoutes from "../routes/recipeRoutes.js";

dotenv.config();

const app = express();

await connectDB();

app.use(express.json());

app.use("/api", recipeRoutes);

export default app;