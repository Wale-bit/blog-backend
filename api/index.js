import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "../config/connectionDB.js";  // Adjust path if needed
import userRoutes from "../routes/user.routes.js";
import blogRoutes from "../routes/blog.routes.js";

dotenv.config();
await connectDB();  // Connect on module load (per invocation)

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));  // Adjust for your frontend URL in prod, e.g., 'https://your-frontend.vercel.app'

// Routes (no static uploads—handled by external service)
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

// Vercel handler wrapper
export default async function handler(req, res) {
  await app(req, res);  // Pass Express req/res to handler
}