import "dotenv/config";
import express from "express";
import cors from 'cors';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 8080;


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)





app.listen(PORT, (err) => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
