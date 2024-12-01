import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());


// Configure CORS
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your client URL (e.g., the port where your client runs)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, 
};

app.use(cors(corsOptions));


const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Absolute path to the upload directory in the client project
const uploadDir = path.resolve(__dirname, "../eat-collective-client/public/upload");


// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); //path to client folder 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname); 
  },
});

const upload = multer({ storage });

// Route for file uploads
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.status(200).json({ filename: req.file.filename });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
